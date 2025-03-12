import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/home/Navbar/ResponsiveNav";
import Footer from "@/components/home/footer/footer";

const font = Rethink_Sans({
  weight : ['400', '500', '600', '700', '800'],
  subsets : ['latin']
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TechDev",
  description: "TechDev is a landing page using NextJS 15, Typescript and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
