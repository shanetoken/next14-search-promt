
export const metadata = {
  title: 'Promtopia',
  description: 'Your AI promt collections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
