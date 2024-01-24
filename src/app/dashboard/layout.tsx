import { Inter } from "next/font/google"
import Menu from "./menu/menu"
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={styles.main}>
                    <Menu />
                    {children}
                </main>
            </body>
        </html>
    )
}
