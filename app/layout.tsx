import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <h1 className="text-3xl text-red-700 text-center p-10 bg-indigo-600">Layout component</h1>
        {children}
      </body>
    </html>
  )
}
