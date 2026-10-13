import type { Metadata } from "next";
import "./globals.css";
import "./workspace.css";
import "./views.css";

export const metadata: Metadata = {
  title: "Amplora — Creator Growth Workspace",
  description: "Campaigns, creators, submissions and earnings in one considered workspace. Interactive MVP interface.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
