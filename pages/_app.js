import './main.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
      <style jsx global>{``}</style>
  </>
  ) 
}