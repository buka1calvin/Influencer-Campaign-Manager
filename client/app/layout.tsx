import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icons/Frame.svg",
    apple: "/icons/Frame.svg",
  },
  title: "Influencer Campaign Manager",
  description:
    "A platform to manage Campaigns for influencers and brands/SMEs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
