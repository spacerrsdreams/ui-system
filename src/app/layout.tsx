import { ThemeProvider } from "@/components/theme-provider";

import "@/app/globals.css";
import { AiChatDrawer } from "@/components/ai-chat-drawer/ai-chat-drawer";
import { BurgerMenu } from "@/components/enhanced-navigation/enhanced-navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="h-full">
        <head />
        <body className="h-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BurgerMenu />
            <main className="flex h-full flex-row subpixel-antialiased transition-all duration-300 ease-in-out">
              {children}
              <AiChatDrawer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
