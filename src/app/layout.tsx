import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import OpenSideBar from "@/context/OpenSideBarContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zoroland",
  description: "Free Platform to watch and downlad anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OpenSideBar>
          <main className="min-h-screen w-full">
            <Navbar />
            <Sidebar />
            <section className="ml-0 md:ml-52 mt-0 p-5 overflow-x-hidden">
              {children}
            </section>
            <footer>
              <div className="ml-0 md:ml-52 p-5 position:absolute bottom-0 left-0">
                <Footer />
              </div>
            </footer>
          </main>
        </OpenSideBar>
      </body>
    </html>
  );
}
