import { Box, makeStyles } from "@material-ui/core";
const useStyle=makeStyles(()=>({
    seprator:{
        border: '4px solid #222',
    }
}))
const Seprator =()=>{
    const classes=useStyle();
    return(
        <>
            <Box className={classes.seprator}></Box>
        </>
    )

}
export default Seprator;