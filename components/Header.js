import {Grid, Input} from '@material-ui/core';

const styles = {
    div: {},
    p: {}
}

const Header = () => (
  <Grid 
    className="headerContainer"

    container
    direction="column"
    justify="space-between"
    alignItems="center"

    gridGap='90px'

  >
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="center" 
    >
      <Grid
        item
        direction="column"
        justify="space-between"
        className="headerLines"
      >
        <div className="headerLine" ></div>
        <div className="headerLine" ></div>
        <div className="headerLine" ></div>
      </Grid>
      <div> <img src='/images/logo.png' className="headerLogo" /> </div>
      <div>Ac</div>
    </Grid>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        item xs={12}
        
      >
        <Input
          className="headerSearch"
          fullWidth={true}
          placeholder="Поиск"
          disableUnderline="true"
          />
      </Grid>
    </Grid>
  </Grid>
)

export default Header
