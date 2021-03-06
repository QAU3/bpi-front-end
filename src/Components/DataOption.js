import React from 'react'

//MATERIAL
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16/ 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);


  /** (opone, optwo, ) */

function DataOption(props){
    const [state, setState] = React.useState (props.defaultVal);
      const handleChange = (event) => {
        setState(event.target.checked);
        props.parentCallback({status:"UPDATE", type:props.name, value:event.target.checked })
        props.parentCallback({status:"UPDATE", type:"isActive" ,value:false})
  
      };

    return( 
        <Typography component="div" >
            <Grid component="label" container justifyContent="center" alignItems="center" spacing={1}>
            <Grid item>{props.opone}</Grid>
            <Grid item>
                
                <AntSwitch checked={state} onChange={handleChange} name="checkedC" disabled={props.disabled}/>
            </Grid>
            <Grid item>{props.optwo}</Grid>
            </Grid>
          </Typography>
    )
}

export default DataOption