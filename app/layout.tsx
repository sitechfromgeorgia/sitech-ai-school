import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ChatBot from "./components/ChatBot";

const noto = Noto_Sans_Georgian({ subsets: ["georgian", "latin"], variable: "--font-noto-georgian" });

export const metadata: Metadata = {
  title: "SiTech AI სკოლა | მოამზადეთ თქვენი ბიზნესი მომავლისთვის",
  description: "დაეუფლეთ AI ავტომატიზაციას, ვებ დეველოპმენტს და ციფრულ ტრანსფორმაციას SiTech AI სკოლის პერსონალიზებული სასწავლო ძრავით.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={`${noto.variable} antialiased scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 cursor-none">
        <div className="fixed inset-0 z-[-1] h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
        <div className="fixed right-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f636,transparent)]"></div>
        <CustomCursor />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
