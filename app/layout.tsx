// app/layout.tsx

import './globals.css'; // <--- THIS LINE IS CRITICAL. IT IS LIKELY MISSING.
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google'; // Assuming you want the font I used

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raiku Explainer',
  description: 'Why Deterministic Execution Matters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
