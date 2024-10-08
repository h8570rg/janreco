import classNames from "classnames";
import { Metadata } from "next";
import { IconDefs } from "@/components/Icon";
import { ToastContainer } from "@/lib/toast";
import { righteous, mPlus1p } from "./fonts";
import "./globals.css";
import { NextUIProvider } from "./nextUiProvider";

export const metadata: Metadata = {
  title: {
    template:
      process.env.NEXT_PUBLIC_SERVICE_ENV !== "development"
        ? "%s | Janreco"
        : "[開発環境] %s | Janreco",
    default:
      process.env.NEXT_PUBLIC_SERVICE_ENV !== "development"
        ? "Janreco"
        : "[開発環境] Janreco",
  },
  description:
    process.env.NEXT_PUBLIC_SERVICE_ENV !== "development"
      ? "麻雀成績管理アプリ"
      : "[開発環境] 麻雀成績管理アプリ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={classNames(righteous.variable, mPlus1p.variable, "h-full")}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="h-full font-mplus">
        <IconDefs />
        <NextUIProvider>
          <div className="h-full bg-background text-foreground">{children}</div>
          <ToastContainer />
        </NextUIProvider>
      </body>
    </html>
  );
}
