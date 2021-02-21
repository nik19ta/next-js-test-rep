import Grid from '@material-ui/core/Grid';
import { StyleRounded } from '@material-ui/icons';

const styles = {
    img: {
            borderRadius: "10px",
            width: "200px", 
            height: "250px", 
            backgroundSize: "cover",
            paddingLeft: "10px"
        },
    p: {
        textDecoration: "underline",
        color: "#FF989B"
    },
    date: {
        color: "#A5A3A1",
        fontSize: "13px"
    }
    }


const NewsBlocks = ({ img, title, date }) => (
    <Grid
  container
  direction="column"
  justify="space-evenly"
  alignItems="flex-start"
  style={{maxWidth: "50%"}}
>   
    <Grid
    style={{background: `url(${img})`, ...styles.img}}
    container
    direction="column"
    justify="flex-end"
    alignItems="flex-start"
  >
        <p style={styles.p}> Подробнее &gt; </p>
    </Grid>

    {/* <img src={img} style={styles.img} /> */}
    <div> <h3> {title} </h3> </div>
    <div> <p style={styles.date}>{date}</p> </div>

</Grid>

)

export default NewsBlocks
