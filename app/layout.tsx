/** @format */

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Flexibble",
	description: "Showcase projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</html>
	);
}
