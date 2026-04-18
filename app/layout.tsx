import "./globals.css";

export const metadata = {
  title: "Kuanta",
  description: "Kuanta Agency",
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