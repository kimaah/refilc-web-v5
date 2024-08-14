import "./globals.css";
import "./style.scss";

export const metadata = {
  title: "reFilc",
  description: "reFilc",
  icon: "./icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className="w-full h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      <head>
        <link rel="icon" href="/shortcut.png" className="rounded-full" />
      </head>
      <body className="bg-primary text-[#3F444F]">{children}</body>
    </html>
  );
}
