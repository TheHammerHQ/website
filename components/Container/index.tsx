import type { FC, ReactNode } from "react";

export interface IContainer {
	children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
	<div className="grid h-screen place-items-center">
		<div className="bg-gray-800 p-10 rounded-lg">{children}</div>
	</div>
);
