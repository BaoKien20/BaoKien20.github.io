import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import LayoutProvider from "@/providers/layout-provider";

const inter = Inter({ subsets: ["latin"] });

interface Props {}
export async function generateMetadata(): Promise<Metadata> {
    const description = "Kmovie - Xem phim online xem trên điện thoại di động và máy tính nhanh nhất. Là một website xem phim miễn phí tốt nhất.";
    return {
        title: {
            template: "%s | KMovie",
            default: "KMovie",
        },
        description,
        icons: {
            icon: "/favicon.ico",
            apple: "/favicon.ico",
        },
        openGraph: {
            type: "website",
            locale: "vi",
            url: "https://kmovie-one.vercel.app/",
            description,
            siteName: "KMovie",
            alternateLocale: "https://kmovie-one.vercel.app/",
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
