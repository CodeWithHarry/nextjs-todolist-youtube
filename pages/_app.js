import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Header/>
  <div className="container mx-auto min-h-screen">
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
  )
}
