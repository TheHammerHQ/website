import type { FormEvent } from "react";
import type { NextPage } from "next";
import { useLocaleParser } from "@libs/localeParser";
import { Container } from "@components/Container";
import { Layout } from "@components/Layout";
import { toast } from "react-toastify";
import Hammer from "@assets/icon.png";
import Image from "next/image";

const Home: NextPage = () => {
	const parser = useLocaleParser();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.success("Done!");
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
							className="mt-5 appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
							type="mail"
							placeholder={parser.get("email")}
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
