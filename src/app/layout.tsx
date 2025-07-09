import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { IconBulbFilled } from "@tabler/icons-react";
import "prismjs/themes/prism-tomorrow.css";

import { Toaster } from "@/components/ui/toaster";

const interFont = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sourav Layek - Software Engineer and Architect",
  description:
    "Hi! I’m Sourav Layek – a tech enthusiast with a passion for turning ideas into reality. Whether it’s designing intuitive interfaces, coding up fun projects, or capturing life’s beauty through my lens, I love keeping things creative and exciting. Dive in, explore my work, and let’s bring some awesome ideas to life!",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  appleWebApp: {
    title: "Sourav Layek",
  },
  openGraph: {
    title: "Sourav Layek - Software Engineer and Architect",
    description:
      "Hi! I’m Sourav Layek – a tech enthusiast with a passion for turning ideas into reality. Whether it’s designing intuitive interfaces, coding up fun projects, or capturing life’s beauty through my lens, I love keeping things creative and exciting. Dive in, explore my work, and let’s bring some awesome ideas to life!",
    type: "website",
  },
  keywords: [
    "Sourav Layek portfolio",
    "hire React developer",
    "freelance web developer",
    "custom app development",
    "frontend development services",
    "backend development with Golang",
    "build a personal website",
    "mobile app development",
    "hire software engineer",
    "school website design",
    "simple UI design",
    "affordable web developer",
    "Node.js developer",
    "freelance programmer",
    "minimalist web design",
    "modern website design",
    "best portfolio website examples",
    "hire full-stack developer",
    "JavaScript developer portfolio",
    "freelance Flutter app development",
    "hire a Golang developer",
    "custom web app development",
    "build a portfolio website",
    "developer portfolio ideas",
    "hire a mobile app developer",
    "ReactJS web development",
    "school admission website design",
    "frontend and backend development",
    "Node.js backend developer",
    "hire a freelance coder",
    "best minimal website designs",
    "hire a creative web developer",
    "hire an app programmer",
    "build a fast-loading website",
    "modern UI/UX web design",
    "developer services for hire",
    "freelance Node.js development",
    "hire a software developer",
    "simple school website design",
    "custom coding projects",
    "developer portfolio templates",
    "minimal design ideas",
    "how to design a portfolio website",
    "freelance app development services",
    "hire a tech freelancer",
    "Flutter cross-platform apps",
    "React-based website developer",
    "create a portfolio for developers",
    "hire a website coder",
    "modern app design solutions",
    "creative web project ideas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </head>
      <body
        className={`${interFont.className} antialiased min-h-screen max-w-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className="w-full h-16 text-center flex justify-center items-center text-sm text-foreground/40">
            <IconBulbFilled className="w-4 h-4 mr-2" /> Dark and light modes
            adapt to your device settings. &copy;Sourav Layek, 2024
          </footer>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
