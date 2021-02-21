import Grid from '@material-ui/core/Grid';
import EventsBlocks from './EventsBlocks'

const styles = {
    div: {},
    p: {}
}

const Events = () => (
    <Grid>
        <h1> События </h1>
        <EventsBlocks 
        title={"Закрытая встреча междунородного бизнес сообщества U."} 
        img={{
                link: "/images/NewsImg.png", 
                title: "SEO - продвижение бизнесса", 
                date: "18 Февраля 19:00"
            }}
        info="Some text" 
        button={{
            isRequired: true,
            text: "Some text",
            link: "link"
        }}/>
    </Grid>
)

export default Events
