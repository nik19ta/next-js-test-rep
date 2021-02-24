import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const styles = {
    img: {
        img: {
            borderRadius: "10px",
            width: "380px", 
            height: "250px", 
            backgroundSize: "cover",
            paddingLeft: "10px",
            padding: "20px 20px 20px 20px"
        }
    },
    title2: {
        color: "#fff"
    },
    p: {
        fontSize: "15px"
    }
}

const SpecialOffersBlocks = ({ color, img, text }) => (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="center" >
            
        <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        style={{backgroundColor: color, ...styles.img.img}} > 

        <h6> {img.title.toUpperCase()} </h6>
     
        <Grid>
            <h3> {img.sale.title1.toUpperCase()} </h3>
            <h3 style={styles.title2} > {img.sale.title2.toUpperCase()} </h3>         
        </Grid>
        
        </Grid>
        <p style={styles.p} > {text} </p>
    </Grid>
)

export default SpecialOffersBlocks
