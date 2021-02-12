import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

body{
	background-color: ${props => props.theme.colors.background};
	color: ${props => props.theme.colors.text};
}
 header{
	 background-color: ${props => props.theme.colors.main};
 }
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

.wrapper {
	width: 50vw;
	margin: 0 auto;
	padding: 10px;
	border: 1px solid #afaeb0;
	border-radius: 10px;
	background-color: ${props => props.theme.colors.secondary};
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.wrapper:hover {
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
h1,h2,h3{
	color: ${props => props.theme.colors.title};
}
.TitleNav{
	color: ${props => props.theme.colors.userName};
}
.ButtonNav{
	background-color: ${props => props.theme.colors.main};
	 &:hover,&:focus{
		 color: ${props => props.theme.colors.userName};
		 border-color: ${props => props.theme.colors.userName};
	 }
}
.navigationItem{
	&:hover,&:focus{
		 color: ${props => props.theme.colors.userName};
		 border-color: ${props => props.theme.colors.userName};
}}
.linkHome{
	color: ${props => props.theme.colors.textHome};
	border-color:${props => props.theme.colors.textHome};
}
`

export default GlobalStyle