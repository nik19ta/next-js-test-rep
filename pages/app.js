import React from "react"
import Head from 'next/head'
import Blog from "../components/blog"

const App = () => (
    <div>
        <Head>
            <title>Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="/main.css" />
        </Head>

        <div>
            <p>head</p>
            <Blog />
        </div>
    </div>
)

export default App;