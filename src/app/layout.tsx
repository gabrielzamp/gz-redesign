import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Clarity from "@microsoft/clarity";

const projectId = "qk4wjw9ist";

Clarity.init(projectId);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Zamp - Growth Manager & Front-end Developer",
  description:
    "Growth manager, digital marketeer and developer based in Brazil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <footer className="px-4 md:px-8 py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-medium dark:text-white">
                <span className="text-gray-500 dark:text-gray-400">
                  gabriel
                </span>
                <span>zamp.</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg text-center md:text-right">
                A growth manager, digital marketeer and developer
                <br className="hidden md:inline" /> currently based in Brazil
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
