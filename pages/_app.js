import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <div className="container mx-auto my-6 max-w-xl">
          <Component {...pageProps} />
          </div>
}

export default MyApp
