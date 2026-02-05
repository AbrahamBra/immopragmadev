import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PragmaDev — Find Critical Flaws Before They Cost Millions",
  description:
    "PragmaDev provides modeling and testing tools for defense, aerospace, and railway engineers to verify, simulate, and bulletproof communicating systems before deployment.",
  keywords: [
    "PragmaDev",
    "system modeling",
    "formal verification",
    "BPMN",
    "SDL",
    "TTCN-3",
    "aerospace",
    "defense",
    "railway",
    "communicating systems",
    "model-based testing",
  ],
  authors: [{ name: "PragmaDev" }],
  openGraph: {
    title: "PragmaDev — Find Critical Flaws Before They Cost Millions",
    description:
      "Modeling and testing tools trusted by Airbus, ESA & NATO since 2001.",
    url: "https://www.pragmadev.com",
    siteName: "PragmaDev",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PragmaDev — Find Critical Flaws Before They Cost Millions",
    description:
      "Modeling and testing tools trusted by Airbus, ESA & NATO since 2001.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="dot-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
