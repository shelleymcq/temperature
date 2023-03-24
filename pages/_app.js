import '@/styles/globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={noto.className}>
      <Component {...pageProps} />
    </main>
  )
}
