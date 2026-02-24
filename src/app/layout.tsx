import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "./globals.css";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, style, font, home } from "@/app/resources";

import { Flex, ThemeProvider, ToastProvider } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable,
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <ThemeProvider>
        <ToastProvider>
          <body style={{ minHeight: "100vh", margin: 0, padding: 0, background: "#0d0f12" }}>
            <Header />
            <main style={{ paddingTop: "64px" }}>
              <RouteGuard>{children}</RouteGuard>
            </main>
            <Footer />
          </body>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  );
}
