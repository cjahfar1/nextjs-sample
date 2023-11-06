import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quick eComm updated',
  description: 'By Jahfar Upcode',
  keywords:["Upcode", "Professional training"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Nav/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
