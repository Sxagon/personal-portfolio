import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import { profile } from "@/content/profile";
import "../globals.css";

// Self-hosted fonts subset to Latin + Czech/Slovak characters (see src/fonts/README.md) to keep them small.
const display = localFont({
  src: "../../fonts/BricolageGrotesque-subset.woff2",
  weight: "400 800",
  variable: "--font-display",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "78% 100%" }],
});

// Decorative handwriting: not preloaded so it never competes with the main text font.
const hand = localFont({
  src: [
    { path: "../../fonts/Kalam-Regular-subset.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Kalam-Bold-subset.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-hand",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#f4f6fb",
  colorScheme: "light",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const url = `/${locale}`;

  return {
    metadataBase: new URL(profile.siteUrl),
    title: t("title"),
    description: t("description"),
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    creator: profile.name,
    alternates: {
      canonical: url,
      languages: { cs: "/cs", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      firstName: "Michal",
      lastName: "Lipka",
      url,
      siteName: profile.name,
      title: t("title"),
      description: t("description"),
      locale: locale === "cs" ? "cs_CZ" : "en_US",
      alternateLocale: locale === "cs" ? ["en_US"] : ["cs_CZ"],
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: t("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`/og-${locale}.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${display.variable} ${hand.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
