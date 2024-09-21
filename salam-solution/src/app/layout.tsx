import React from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">TechSolutions</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-white hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-white hover:underline">About</Link></li>
              <li><Link href="/services" className="text-white hover:underline">Services</Link></li>
              <li><Link href="/contact" className="text-white hover:underline">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}