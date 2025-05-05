import { GeistSans as geistSans } from "geist/font/sans";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/cn";

import "@/styles/globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      suppressHydrationWarning
      className={cn(geistSans.variable, notoSans.variable, "font-noto-sans")}
      lang="ja"
    >
      <body className="bg-background-100 text-gray-1000">{children}</body>
    </html>
  );
}
