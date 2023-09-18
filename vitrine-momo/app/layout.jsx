export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import Layout from "app/components/layout"
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="bg-gray-200"><Layout >{children} </Layout></body>
    </html>
  )
}
