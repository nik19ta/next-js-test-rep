import Grid from '@material-ui/core/Grid';
import NewsBlocks from './NewsBlocks'

const styles = {
    div: {},
    p: {}
}

const News = () => (
   <Grid>
       <h1> Новости </h1>
        <NewsBlocks img={"/img.png"} title={"Title"} date={"2020-25-03"}/>
   </Grid>
)

export default News
