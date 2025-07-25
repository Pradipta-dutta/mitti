import localFont from "next/font/local";
import "./globals.css";
import ModernNavbar from "@/app/components/ModernNavbar";
import ModernFooter from "@/app/components/ModernFooter";
import SessionWrapper from "./components/SessionWrapper";
import { Inter, Poppins } from 'next/font/google';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Mitti - Smart Sustainable Agriculture",
  description: "Empowering farmers with real-time soil analysis, AI-powered fertilizer recommendations, and comprehensive crop health monitoring for sustainable agriculture.",
  keywords: "sustainable agriculture, soil analysis, fertilizer recommendations, crop health, smart farming, IoT agriculture",
  authors: [{ name: "Mitti Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} font-sans antialiased bg-white dark:bg-earth-900 text-earth-900 dark:text-earth-100 transition-colors duration-300`}
      >
        <SessionWrapper>
          <ModernNavbar />
          <main className="min-h-screen">
            {children}
          </main>
          <ModernFooter />
        </SessionWrapper>
      </body>
    </html>
  );
}
