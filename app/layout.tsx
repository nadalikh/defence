import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
export const metadata: Metadata = {
    title: "defence",
};

const font = localFont({
    src: './fonts/iran.woff',
    display: 'swap',
    variable: '--font-custom',
    weight: '400',  // or 'normal'
    style: 'normal',
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html
            lang="fa"
            dir={'rtl'}
            className={`h-full ${font.variable} ${font.className}`}
        >
            <body className={"min-h-full flex flex-col max-w-150 m-auto relative "}>
                <Image fill sizes={'auto'} loading="eager" className={'-z-20'} src={'/images/background1.jpg'} alt="background"/>
                {children}
            </body>
        </html>
    );
}
