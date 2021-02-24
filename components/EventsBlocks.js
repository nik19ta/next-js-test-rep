import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
    img: {
        img: {
            borderRadius: "10px",
            width: "380px", 
            height: "250px", 
            backgroundSize: "cover",
            paddingLeft: "10px"
        },
        date: {
            color: "#FF989B",
            fontSize: "18px"
        },
        title: {
            color: "#fff",
            fontSize: "25px"
        }
    },
    date: {
        color: "#A5A3A1",
        fontSize: "13px"
    },
    title: {
        color: "#A5A3A1",
        fontSize: "16px",
        maxWidth: "80%"
    },
    button: {
        maxWidth: "80%",
        margin: "0 auto"
    }
    }

const EventsBlocks = ({ title, img, info, button }) => (
    <Grid
    container
    direction="column"
    alignItems="flex-start" >
        
        <p style={styles.title}> { title } </p>
        <Grid
        style={{background: `url(${img.link})`, ...styles.img.img}}
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-end" >
        
        <div> 
            <h1 style={styles.img.title}> {img.title} </h1>
            <p style={styles.img.date}> {img.date} </p> 
        </div>

        </Grid>

        <div> <p> {info} </p> </div>
        
        {button.isRequired && <Button 
        variant="outlined"
        fullWidth={true}
        style={styles.button}
        >{ button.text }</Button> }
    </Grid>

)

export default EventsBlocks
