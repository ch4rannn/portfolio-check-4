import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Added Poppins
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiranjivi Sah - Web Developer | Portfolio",
  description: "Chiranjivi Sah is a passionate Web Developer building fast, beautiful websites. Connect with Chiranjivi Sah on LinkedIn and GitHub.",
  keywords: ["Chiranjivi Sah", "Web Developer", "Frontend Developer", "Portfolio", "Nepal", "React", "Next.js"],
  authors: [{ name: "Chiranjivi Sah", url: "https://chiranjivisah.com.np" }],
  metadataBase: new URL("https://chiranjivisah.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chiranjivi Sah - Web Developer | Portfolio",
    description: "Chiranjivi Sah is a passionate Web Developer building fast, beautiful websites.",
    url: "https://chiranjivisah.com.np",
    siteName: "Chiranjivi Sah Portfolio",
    images: [
      {
        url: "/my_photo.jpg",
        width: 800,
        height: 600,
        alt: "Chiranjivi Sah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chiranjivi Sah",
    jobTitle: "Web Developer",
    url: "https://chiranjivisah.com.np",
    sameAs: [
      "https://www.linkedin.com/in/chiranjivi-sah-9390b8326/",
      "https://github.com/ch4rannn",
      "https://chiranjivisah.com.np"
    ],
    image: "https://chiranjivisah.com.np/my_photo.jpg",
    description: "Chiranjivi Sah is a passionate Web Developer building fast, beautiful websites."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
