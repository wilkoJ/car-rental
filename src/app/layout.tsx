import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AutoGreen",
  description: "AutoGreen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
