"use client"

import "./globals.css";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <RecoilRoot>
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
        </RecoilRoot>
        </body>
        </html>
    );
}