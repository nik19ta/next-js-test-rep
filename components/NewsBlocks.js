import Grid from '@material-ui/core/Grid';
import { StyleRounded } from '@material-ui/icons';

const styles = {
    img: {
            width: "150px",
            height: "300px",
            borderRadius: "5px"
        }
    }


const NewsBlocks = ({ img, title, date }) => (
    <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="flex-start"
>   
    <div style={{background: `url(${img})`, width: "150px", height: "300px", backgroundSize: "cover"}} />

    {/* <img src={img} style={styles.img} /> */}
    <div> {title} </div>
    <div> {date} </div>

</Grid>

)

export default NewsBlocks
