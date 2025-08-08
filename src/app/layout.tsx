import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
title: "Modern Landing",
description: "Landing moderna con Next.js + Tailwind",
icons: [{ rel: "icon", url: "/favicon.ico" }],
};
export default function RootLayout({ children }: { children:
React.ReactNode }) {
return (
<html lang="es">
<body className="min-h-screen gradient-primary">
{children}
</body>
</html>
);
}
