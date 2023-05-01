import './globals.css'
import {Inter} from 'next/font/google'
import Providers from "@/store/Provider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Next.JS-Redux',
    description: 'Using Next.JS, Redux toolkit, React-Redux for client side components',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
