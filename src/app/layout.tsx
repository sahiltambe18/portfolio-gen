import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";



export const metadata: Metadata = {
  title: "Portfolio Generator",
  description: "Powered by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      >
        <Background>
          {children}
        </Background>
      </body>
    </html>
  );
}
