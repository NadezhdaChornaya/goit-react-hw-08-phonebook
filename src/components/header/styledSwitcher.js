import styled from "styled-components";

export const DIV = styled.div`
margin-top: 20px;
margin-left: 92%;
.inputSwitcher{
    position:relative;
    width:80px;
    height:40px;
    -webkit-appearance:none;
    outline:none;
    background:#c6c6c6;
    border-radius:20px;
    transition:.5s;
    box-shadow:inset 0 0 5px rgba(0,0,0,.2);
    &:checked{
        background:orange;
    }
    &:before{
        content:'';
position:absolute;
width:40px;
height:40px;
border-radius:20px;
top:0;
left:0;
background:#fff;
transition:.5s;
transform:scale()(1.1);
box-shadow:0 2px 5px rgba(0,0,0,.2);
    }
    &:checked:before{
        left: 40px;
    }
}
`