import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import LayoutProvider from "@/providers/layout-provider";

const inter = Inter({ subsets: ["latin"] });

interface Props {}
export async function generateMetadata(): Promise<Metadata> {
    const description =
        "Kmovie - Nền tảng xem phim trực tuyến hàng đầu với hàng ngàn bộ phim đa dạng, miễn phí, phù hợp xem trên điện thoại di động và máy tính. Khám phá ngay các bộ phim hot nhất và trải nghiệm công nghệ xem phim tiên tiến cùng Kmovie.";

    return {
        title: {
            template: "%s | Kmovie",
            default: "Kmovie - Xem phim trực tuyến miễn phí",
        },
        description,
        icons: {
            icon: "/favicon.ico",
            apple: "/favicon.ico",
        },
        openGraph: {
            type: "website",
            locale: "vi",
            url: "https://kmovie.me/",
            description,
            siteName: "kmovie",
            alternateLocale: "https://kmovie.me/",
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="google" content="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="android-touch-icon" href="/favicon.ico" />
                <link rel="windows-touch-icon" href="/favicon.ico" />
            </head>
            <body className={cn(inter.className, " bg-mainBackground min-h-screen h-full w-full ")}>
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
