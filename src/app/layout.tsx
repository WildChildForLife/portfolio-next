import { Analytics } from '@vercel/analytics/react';


import NavBar from './components/NavBar/NavBar'
import Providers from './providers'
import routes from './routes'
import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Youssef El Gharbaoui | Solution Architect | Portfolio',
    description: "I'm Youssef, a Solution Architect with more than a decade of experience with a focus on Cloud and Web Technologies.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning >
            <body>
                <Providers>
                    <NavBar routes={routes}></NavBar>
                    <main>
                        {children}
                    </main>
                <Analytics />
                </Providers>
            </body>
        </html>
    )
}
