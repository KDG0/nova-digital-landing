import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-cabinet",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "NOVA DIGITAL | Digital Marketing & SaaS Development Agency",
  description:
    "We build digital experiences that convert. Full-service digital marketing, web development, and AI automation agency helping brands scale with strategy + technology.",
  keywords: [
    "digital marketing agency",
    "SaaS development",
    "web development",
    "SEO",
    "paid media",
    "AI automation",
  ],
  openGraph: {
    title: "NOVA DIGITAL | Digital Marketing & SaaS Development Agency",
    description:
      "We build digital experiences that convert. Full-service digital marketing, web development, and AI automation agency.",
    url: "https://novadigital.dev",
    siteName: "NOVA DIGITAL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA DIGITAL | Digital Marketing & SaaS Development Agency",
    description:
      "We build digital experiences that convert. Full-service digital marketing, web development, and AI automation agency.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[family-name:var(--font-sora)] bg-surface text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
