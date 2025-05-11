import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const netflixSansFont = localFont({
  src: [
    {
      path: "./fonts/NetflixSans-Regular.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-netflix-sans",
});

export const metadata: Metadata = {
  title: "Nextflix - Web Application",
  description: "Nextflix - Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body className={`${netflixSansFont.variable} antialiased`}>
          {children}
        </body>
    </html>
  );
}
