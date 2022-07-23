import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_KEY as string,
);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method != "POST") {
		res.redirect("/").end();
		return;
	}

	const { mail } = req.body;
	if (!mail) {
		res.json({ success: false, message: "mail_missing" });
		return;
	}

	let { data: hammer, error: readError } = await supabase
		.from("hammer")
		.select("*")
		.eq("mail", mail);

	if (readError) {
		res.status(500).json({
			success: false,
			message: "internal_server_error",
		});
		return;
	}

	if (hammer?.length) {
		res.json({ success: false, message: "mail_already_used" });
		return;
	}

	const { data, error: insertError } = await supabase
		.from("hammer")
		.insert([{ mail }]);

	if (insertError) {
		res.status(500).json({
			success: false,
			message: "internal_server_error",
		});
		return;
	}

	res.status(200).json({ success: true, message: "joined" });
}
