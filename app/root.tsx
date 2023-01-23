import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/tailwind.css";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import Header from "./components/Navigation";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Wagz",
	viewport: "width=device-width,initial-scale=1",
});

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
				</style>
			</head>
			<body className="bg-gray-50 antialiased">
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
