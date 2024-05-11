import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spacegrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Sadorect",
  description: "Achieve business success with sadorect services",
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
