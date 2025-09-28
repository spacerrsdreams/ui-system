import { ThemeProvider } from "@/components/theme-provider";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex h-[100vh] flex-1 flex-col subpixel-antialiased">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
