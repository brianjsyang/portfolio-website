import type { Metadata } from "next";
import "./globals.css";

// import the Google fonts.
import { Sintony, Poppins } from "next/font/google";

const sintony = Sintony({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sintony',
})

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// set meta data for the entire site.
export const metadata: Metadata = {
  title: "Brian Yang - Front End Developer",
  description: "Learning new things everyday - with devoted attention to detail",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sintony.variable} ${poppins.variable}`}>
          {children}
      </body>
    </html>
  );
}