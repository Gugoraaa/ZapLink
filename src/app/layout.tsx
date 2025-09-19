import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZapLink",
  description: "ZapLink - The Ultimate Link Shortener",
  icons: {
    icon: "/zaplink.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0c1220] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
