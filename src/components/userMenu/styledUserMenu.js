import styled from "styled-components";

export const DIV = styled.div`
display:flex;
align-items:center;
.TitleNav{
    margin-left:10px;
    font-weight: 500;
font-size:20px;
color:#fff;
}
.ButtonNav{
     margin-left: 10px;
    padding: 5px;
    min-width: 80px;
     border: 1px solid #fff;
    border-radius: 50px;
  text-align:center;
  font-weight: 500;
font-size:20px;
color:#fff;
background-color:#2c29d9;
cursor:pointer;
  &:hover,&:focus{
      color:#d98729; 
      border: 1px solid #d98729;
}
`