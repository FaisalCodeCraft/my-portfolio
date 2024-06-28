import type { Metadata } from "next";
import "./globals.css";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Nunito } from "next/font/google";


const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Faisal",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box position={"relative"}>
          <Navbar />
          <Box > {children}</Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
