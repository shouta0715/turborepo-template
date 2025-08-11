import "@/styles/globals.css";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang="ja">
      <body>{children}</body>
    </html>
  );
}
