import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body{
    background: #FFFFFF;
    font-family:'Poppins'; 
    font-weight: 400;
    font-size: 16px; 
    line-height: 1.9;
   
}

h1{
    font-size: 50px;
}

h4{
    font-size: 18px; 
    font-weight: 600;
    line-height: 55px;
    color: rgb(255, 255, 255);
}

h2 {
    margin: 50px 0px 50px 0px;
    color:  rgba(255, 255, 255, 0.6);
    font-family: sans-serif;
    font-weight: 100;
    font-size: 21px;
  }  

h3{
    font-size: 18px;
    color: rgb(255, 255, 255);
    margin-bottom: 20px
}

p{
    font-size: 16px;
    line-height: 1.5;
    font-family:'Cerebri Sans',sans-serif;
    
}

img{
    border-radius: 100%;
    size
}`;
export default GlobalStyles;
