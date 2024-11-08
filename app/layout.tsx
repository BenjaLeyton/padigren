// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Glass Collection App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
