import { Noto_Sans_KR } from "next/font/google";
import "@/styles/globals.css";
import GlobalHeader from "@/components/section/global/header";
import GlobalFooter from "@/components/section/global/footer";
import { ThemeProvider } from "@/components/ui/theme-proider";

const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>
        <ThemeProvider defaultTheme="system" enableSystem attribute="class">
          <GlobalHeader />
          {children}
          <GlobalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
