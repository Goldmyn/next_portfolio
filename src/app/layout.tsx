import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marius Nwokolo",
  description: "My Awesome Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono} ${geistSans} grid lg:flex bg-slate-900 text-white lg:mt-[5rem] mx-auto`}
      >
        <section className="lg:block lg:fixed left-0 top-0 lg:mt-[4.6rem] mx-5 my-10">
          <NavBar />
        </section>

        <section className="grid lg:ml-[33rem] lg:mr-[6rem] xl:ml-[42rem] xl:mr-[8.7rem] mx-7">
          {children}
        </section>
      </body>
    </html>
  );
}
