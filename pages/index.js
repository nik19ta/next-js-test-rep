import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'
import News from '../components/News'
import Events from '../components/Events'
import SpecialOffers from '../components/SpecialOffers'
 
export default function App() {
    return (  
    <MainLayout>
        <div>
            <Head>
                <meta http-equiv="content-language" content="ru" />
                <meta name="Description" content="Test"></meta>
                <title>Next App</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link href="/main.css" />
            </Head>

            <News />  
            <Events /> 
            <SpecialOffers />
        </div> 
    </MainLayout>

    )
}