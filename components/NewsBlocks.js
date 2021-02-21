import Grid from '@material-ui/core/Grid';

const styles = {
    div: {},
    p: {}
}

const NewsBlocks = ({ img, title, date }) => (
    <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="flex-start"
>   
    <dev> {img} </dev>
    <dev> {title} </dev>
    <dev> {date} </dev>
</Grid>
)

export default NewsBlocks
