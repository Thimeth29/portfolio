import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thimeth Chathnuka — Portfolio",
  description: "Cloud Computing Undergraduate, Flutter & Backend Developer, AI Enthusiast. Premium portfolio displaying software engineering work and experience.",
  keywords: ["Thimeth Chathnuka", "Flutter Developer", "Cloud Computing", "Software Engineer Portfolio", "AI Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#09090B] text-white font-sans antialiased selection:bg-[#3B82F6] selection:text-black">
        {children}
      </body>
    </html>
  );
}
