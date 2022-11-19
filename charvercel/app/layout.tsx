import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>charles in the middle</title>
      </head>
      <body>
        <p>Corita the queen</p>
      </body>
    </html>
  );
}
