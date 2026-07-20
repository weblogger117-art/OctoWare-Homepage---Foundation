import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OctoWare®Gesundheit",
    template: "%s | OctoWare®Gesundheit"
  },
  description:
    "Die moderne Plattform für den öffentlichen Gesundheitsdienst.",
  applicationName: "OctoWare®Gesundheit",
  keywords: [
    "ÖGD",
    "Gesundheitsamt",
    "OctoWare",
    "OctoWare NET",
    "Digitalisierung",
    "Fachverfahren",
    "easy-soft"
  ],
  authors: [
    {
      name: "easy-soft GmbH"
    }
  ]
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
