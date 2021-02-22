import {Grid, Input} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuIcon from '@material-ui/icons/Menu';

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
    alignItems="center" >
    
    <div className="figure" > </div>
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="center" > 
      <div> <MenuIcon/> </div>
      <div> <img src='/images/logo.png' className="headerLogo" /> </div>
      <div> <SupervisorAccountIcon/> </div>
    </Grid>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center" >
      <Grid item xs={12}>
        <Input
          className="headerSearch"
          fullWidth={true}
          placeholder="Поиск"
          disableUnderline={true}
          />
      </Grid>
    </Grid>
  </Grid>
)

export default Header
