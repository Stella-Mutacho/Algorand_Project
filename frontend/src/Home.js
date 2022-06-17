import React from "react";
import logo from "./logo.svg"
import Box from '@material-ui/core/Box';
import ButtonClick from "./button.js"
function Home(){
    return (
    <div>
        <h1> 10 Academy Home</h1>
        
        <h2> Enter your wallet ID</h2>
        <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}></div>
        
        <Box color="blue" bgcolor="palevioletred" p={1}>
        Enter
        </Box>
        <ButtonClick />
    </div>
    );

}
export default Home;