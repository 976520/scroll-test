import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="top-center" expand={true} richColors />
      </body>
    </html>
  );
}
