import Grid from '@material-ui/core/Grid';
import NewsBlocks from './NewsBlocks'

const styles = {
    div: {},
    p: {}
}

const news = [
    {
        img: "/images/NewsImg.png",
        title: "Мы принимаем участие в научном иследовании ??!",
        date: "22 декабря 2021 Г.",
        link: "https://github.com/egorkaBurkenya"
    },
    {
        img: "/images/NewsImg.png",
        title: "Мы принимаем участие в научном иследовании ??!",
        date: "22 декабря 2021 Г.",
        link: "https://github.com/egorkaBurkenya"
    },
    {
        img: "/images/NewsImg.png",
        title: "Мы принимаем участие в научном иследовании ??!",
        date: "22 декабря 2021 Г.",
        link: "https://github.com/egorkaBurkenya"
    }
    
]

const News = () => (
   <Grid>
       <h1> Новости </h1>
       <div className="grid">
        {news.map(({img, title, date, link}) => {
                return ( <NewsBlocks img={img} title={title} date={date} link={link} /> )
            })}
       </div>
   </Grid>
)

export default News
