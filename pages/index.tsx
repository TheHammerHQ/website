import { type FormEvent, type ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Container } from "@components/Container";
import { Layout } from "@components/Layout";
import { toast } from "react-toastify";
import Hammer from "@assets/icon.png";
import Image from "next/image";
import axios from "axios";

const Home: NextPage = () => {
	const parser = useLocaleParser();
	const [mail, setMail] = useState("");
	const [loading, setLoading] = useState(false);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (loading) return;
		setLoading(true);

		if (!mail) {
			toast.error(parser.get("enter_mail"));
			setLoading(false);
			return;
		}

		axios
			.post("/api/join", { mail })
			.then((res) => {
				if (res.data.success) {
					setMail("");
					toast.success(parser.get(res.data.message));
				} else {
					toast.error(parser.get(res.data.message));
				}
			})
			.catch((err) => {
				toast.error(parser.get("internal_server_error"));
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMail(e.target.value);
	};

	return (
		<Layout title="Home">
			<Container>
				<div className="grid place-items-center pb-2">
					<Image
						src={Hammer.src}
						alt="Hammer"
						width={Hammer.width}
						height={Hammer.height}
						blurDataURL={Hammer.blurDataURL}
					/>
				</div>

				<h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
					{parser.get("coming_soon")}
				</h1>
				<div>
					<span>{parser.get("join_waitlist")}</span>
					<br />
					<form onSubmit={onSubmit}>
						<input
							onChange={onMailChange}
							className="mt-5 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
							type="email"
							value={mail}
							placeholder={parser.get("email")}
							required
						/>
						<button className="font-extrabold w-full rounded-md mt-5 shadow-lg bg-gradient-to-l from-green-400 to-blue-500">
							{parser.get("join_button")}
						</button>
					</form>
				</div>
			</Container>
		</Layout>
	);
};

export default Home;
