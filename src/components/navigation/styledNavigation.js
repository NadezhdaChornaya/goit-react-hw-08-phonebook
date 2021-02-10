import styled from "styled-components";

export const Ul = styled.div`
display:flex;

.navigationItem{
    min-width: 80px;
    margin-left: 10px;
    padding: 5px;
    list-style-type: none;
    border: 1px solid #fff;
    border-radius: 50px;
  text-align:center;
  &:hover,&:focus{
      color:#d98729; 
      border: 1px solid #d98729;
  }
}
.navigation-link{
text-decoration:none;
font-weight: 500;
font-size:20px;
color:#fff;
cursor:pointer;
}
&:hover,&:focus{
   color:#d98729; 
}
.navigation-link-active{
    color:#d98729;
    
}

`