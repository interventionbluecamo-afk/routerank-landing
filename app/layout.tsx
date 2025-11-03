import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RouteRank - Track Your Grind. Climb the Ranks. | Coming Soon",
  description: "Gamified delivery driver tracking app. Compete on leaderboards, earn badges, and flex your stats. Join the waitlist - coming soon to iOS & Android.",
  openGraph: {
    title: "RouteRank - Track Your Grind. Climb the Ranks.",
    description: "Coming soon: Competitive delivery driver tracking app. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#000000",
              color: "#ffffff",
              borderRadius: "12px",
              padding: "16px 20px",
              fontSize: "14px",
              fontWeight: "500",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
