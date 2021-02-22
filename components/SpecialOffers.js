import Grid from '@material-ui/core/Grid';
import SpecialOffersBlocks from './SpecialOffersBlocks'

const styles = {
    div: {},
    p: {}
}

const SpecialOffers = () => (
    <Grid>
        <h1>Специальные Предложения</h1>
        <div className="grid">
        <SpecialOffersBlocks 
        img={{
            color: "#FF989B",
            title: "Специальная цена для участинков сообщества!",
            sale: {
                title1: "Скидка 10%",
                title2: "На все арома масла"
            }
        }} text={"Участиков U  пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических сотояний Человека   "}
        />
        <SpecialOffersBlocks 
        img={{
            color: "#D99BC3",
            title: "Специальная цена для участинков сообщества!",
            sale: {
                title1: "Скидка 10%",
                title2: "На все арома масла"
            }
        }} text={"Участиков U  пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических сотояний Человека   "}
        />
        <SpecialOffersBlocks 
        img={{
            color: "#FF989B",
            title: "Специальная цена для участинков сообщества!",
            sale: {
                title1: "Скидка 10%",
                title2: "На все арома масла"
            }
        }} text={"Участиков U  пригласили изучить воздействия эфирных масел и релаксирующих программ напсихофизиологических сотояний Человека   "}
        />
    </div>
     </Grid>
)

export default SpecialOffers
