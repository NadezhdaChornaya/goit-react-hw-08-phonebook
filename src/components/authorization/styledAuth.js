import styled from "styled-components";

export const DIV = styled.div`
.mainTitle{
    margin-top:20px; 
     margin-bottom:20px;  
    font-size: 40px;
text-align: center;
color:#3b2dd6;
text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}

.formAuth{
    display: flex;
    flex-direction:column;
}
.labelAuth{
    font-size: 20px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.inputAuth{
     margin: 5px 0 20px 0;
    padding: 5px 10px;
  
    width: 100%;
    
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #afaeb0;
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
.buttonAuth{
    margin: 0 auto;	
   width: 150px;
   padding: 5px 10px; 
   font-size: 20px;
   border-radius: 50px;
   border-color: #eeedfa;
   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #d98729;
   background-color:#eeedfa;
   cursor: pointer;
   
   &:hover {
       color:#fff;
       background-color:#d98729;
       /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);} */
}

`