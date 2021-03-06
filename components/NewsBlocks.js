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
    },
    h1: {
        fontSize: "14px"
    }
    }


const NewsBlocks = ({ img, title, link, date }) => (
    <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
        style={{maxWidth: "250px"}} >

        <Grid
        style={{background: `url(${img})`, ...styles.img}}
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-start" >
            <p> <a style={styles.p} href={ link }>Подробнее &gt;</a></p>
        </Grid>
        
        <div> <h3 style={styles.h1}> {title} </h3> </div>
        <div> <p style={styles.date}>{date}</p> </div>
    </Grid>

)

export default NewsBlocks
