import styled from "styled-components";

export const DIV = styled.div`
.mainTitle{
        margin-top:20px; 
     margin-bottom:20px;  
    font-size: 40px;
text-align: center;
text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.img{
  margin:20px auto;
}
.text{
    display: block;
    margin-bottom:20px;
    font-size: 20px;
    text-align:center;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.linkHome{
    display: block;
    margin:0 auto;
    width: 200px;
    margin-bottom:20px;
    padding: 5px;
    text-align:center;
    list-style-type: none;
    border-style:solid;
    border-width: 1px;
    border-radius: 50px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #d98729;
    background-color:#eeedfa;
    text-align:center;
    text-decoration:none;
    font-weight: 500;
    font-size:20px;
cursor:pointer;
  &:hover,&:focus{
      color:#d98729; 
      border: 1px solid #d98729;
  }
}
`
