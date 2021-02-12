import styled from "styled-components";

export const Div = styled.div`
.contactList{
  list-style: none;
}

.itemContact{
    display:flex;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 20px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
    border: 1px solid #afaeb0;
    border-radius: 5px;
   
     &:not(:last-child) {
      margin-bottom: 10px;}
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}

}
.button{
   min-width: 80px;
   padding: 5px 10px; 
   font-size: 20px;
   border-radius: 50px;
   border-color: #eeedfa;
   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #d98729;
   border-color: #eeedfa;

   background-color:#eeedfa;
   cursor: pointer;
   
   &:hover {
     color:#fff;
       background-color:#d98729;
   }

`