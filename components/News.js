import Grid from '@material-ui/core/Grid';
import NewsBlocks from './NewsBlocks'

const styles = {
    div: {},
    p: {}
}

const News = () => (
   <Grid>
       <h1> Новости </h1>
       <div className="grid">
        <NewsBlocks img={"/images/NewsImg.png"} title={"Title"} date={"2020-25-03"}/>
        <NewsBlocks img={"/images/NewsImg.png"} title={"Title"} date={"2020-25-03"}/>
        <NewsBlocks img={"/images/NewsImg.png"} title={"Title"} date={"2020-25-03"}/>
        <NewsBlocks img={"/images/NewsImg.png"} title={"Title"} date={"2020-25-03"}/>
       </div>
   </Grid>
)

export default News
