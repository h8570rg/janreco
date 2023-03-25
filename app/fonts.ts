import { Noto_Sans_JP, Righteous, Roboto } from "@next/font/google";

export const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});