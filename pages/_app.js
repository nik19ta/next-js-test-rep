import './main.css'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
      <style jsx global>{`
      body {
        font-size: 1000px;
        backgorund: red;
      }
      `}</style>
  </>
  ) 
}