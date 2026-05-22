// app/layout.tsx
import { Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const notoSerifThai = Noto_Serif_Thai({
  subsets: ["thai"],
  weight: ["400", "600", "700"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={notoSerifThai.className}>
        {children}
      </body>
    </html>
  );
}