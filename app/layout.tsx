import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speechbot - Text to Speech",
  description: "Modern text-to-speech application using Web Speech API. Convert text to speech with multiple languages and voices.",
  keywords: ["text-to-speech", "TTS", "speech synthesis", "web speech api", "voice", "audio"],
  authors: [{ name: "thateflondon" }],
  creator: "thateflondon",
  publisher: "thateflondon",
  metadataBase: new URL("https://thateflondon.github.io"),
  openGraph: {
    title: "Speechbot - Text to Speech",
    description: "Modern text-to-speech application using Web Speech API",
    url: "https://thateflondon.github.io/speechbot",
    siteName: "Speechbot",
    type: "website",
  },
  icons: {
    icon: "/speechbot/icon.svg",
    shortcut: "/speechbot/icon.svg",
    apple: "/speechbot/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-[var(--font-primary)]">{children}</body>
    </html>
  );
}
