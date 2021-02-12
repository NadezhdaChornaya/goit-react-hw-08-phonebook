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
}
.navigation-link{
text-decoration:none;
font-weight: 500;
font-size:20px;
color:#fff;
cursor:pointer;
}

.navigation-link-active{
    font-weight: 700;
    color:#fc9803;
    
}

`