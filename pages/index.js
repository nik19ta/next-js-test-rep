import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function App() {
    return (  
    <MainLayout>
        <div>
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="/main.css" />
            </Head>

            
        </div> 
    </MainLayout>

    )
}