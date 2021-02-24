import Grid from '@material-ui/core/Grid';
import EventsBlocks from './EventsBlocks'

const events = [
    {
        title: "Закрытая встреча междунородного бизнес сообщества U.",
        img: {
            link: "/images/NewsImg.png", 
            title: "SEO - продвижение бизнесса", 
            date: "18 Февраля 19:00"
        },
        info: "Some text",
        button: {
            isRequired: true,
            text: "Some text",
            link: "link"
        }
    },
    {
        title: "Закрытая встреча междунородного бизнес сообщества U.",
        img: {
            link: "/images/NewsImg.png", 
            title: "SEO - продвижение бизнесса", 
            date: "18 Февраля 19:00"
        },
        info: "Some text",
        button: {
            isRequired: true,
            text: "Some text",
            link: "link"
        }
    },
    {
        title: "Закрытая встреча междунородного бизнес сообщества U.",
        img: {
            link: "/images/NewsImg.png", 
            title: "SEO - продвижение бизнесса", 
            date: "18 Февраля 19:00"
        },
        info: "Some text",
        button: {
            isRequired: true,
            text: "Some text",
            link: "link"
        }
    }
]

const Events = () => (
    <Grid>
    <h1> События </h1>
    <div 
        class="grid" >
            { events.map(({title, img, info, button}) => {
                return (
                    <EventsBlocks title={title} img={img} button={button} info={info} />
                )
            })}
        </div>
    </Grid>
)

export default Events
