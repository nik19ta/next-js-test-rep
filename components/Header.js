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
    
    <div className="figure" ></div>

    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="center" > 
      <div> <MenuIcon width="25px" height="25px"  /> </div>
      <div> <img src='/images/logo.png' width="25px" height="25px" alt="logo" className="headerLogo" /> </div>
      <div> <SupervisorAccountIcon width="25px" height="25px" /> </div>
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
