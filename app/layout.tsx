import type { Metadata } from "next";
import "./globals.css";

// import fontawesome config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// import the Google fonts.
import { Sintony, Poppins } from "next/font/google";

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL('https://brianjsyang.ca'),
  title: "Brian Yang - Front End Developer",
  description: "More about me and my past projects! Learning new things everyday",
  openGraph: {
    title: "Brian Yang - Front End Developer",
    description: "More about me and my past projects! Learning new things everyday",
    images: '/opengraph-image.png'
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sintony.variable} ${poppins.variable} bg-background`}>
          {children}
          <Analytics />
      </body>
    </html>
  );
}