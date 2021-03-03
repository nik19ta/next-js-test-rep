import Grid from '@material-ui/core/Grid';
import SpecialOffersBlocks from './SpecialOffersBlocks'

const styles = {
    div: {},
    p: {}
}

const specialoffers = [
    {img: { 
        color: "#FF989B",
        title: "Специальная цена для участинков сообщества!",
        sale: {
            title1: "Скидка 10%",
            title2: "На все арома масла"
           }
        },
    text: "Участиков U  пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических сотояний Человека"
},
    {img: { 
        color: "#FF989B",
        title: "Специальная цена для участинков сообщества!",
        sale: {
            title1: "Скидка 10%",
            title2: "На все арома масла"
           }
        },
    text: "Участиков U  пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических Человека   "
},
{img: { 
    color: "#FF989B",
    title: "Специальная цена для участинков сообщества!",
    sale: {
        title1: "Скидка 10%",
        title2: "На все арома масла"
       }
    },
text: "Участиков пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических сотояний Человека   "
}
]

const colors = {
    colors: ["#FF989B", "#D99BC3"],
    num: true
}

const SpecialOffers = () => (
    <Grid>
        <h2>Специальные Предложения</h2>
        <Grid className="grid">
            {specialoffers.map(({img, text}) => {
                colors.num = !colors.num
                return (
                <SpecialOffersBlocks 
                    color={colors.num ? colors.colors[1] : colors.colors[0]} 
                    img={img} 
                    text={text}
                    key={text}
                />
                )
            })}  
        </Grid>
     </Grid>
)

export default SpecialOffers
