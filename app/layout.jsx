import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spacegrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spacegrotesk.className}>
        <div className="bg-gray-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
