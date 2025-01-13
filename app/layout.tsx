
import { redHatMono } from "@/modules/layout/fonts";
import "./globals.css";
import { Header } from "@/modules/layout/components/Header";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body
				className={`${redHatMono.className} text-zinc-800 selection:bg-black selection:text-white`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
