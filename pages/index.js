import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Authenticated TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <h1>Todo list</h1>
      </main>

      <footer >

      </footer>
    </div>
  )
}
