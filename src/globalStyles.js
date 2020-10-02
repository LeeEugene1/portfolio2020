// main css 파일
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: 'Sourcs Sans pro', sans-serif;
    }
`;

export const Container = styled.div`
 z-index:1;
 width:100%;
 max-width:1300px;
 margin-right:auto;
 padding-right:50px;
 padding-left:50px;
 @media(max-width:996px){
    padding-right:30px;
    padding-left:30px;
 }
`;

export const Button = styled.button`
    border-radius:4px;
    background:${({primary})=>(primary ? '#4b59f7' : '#0467fb')};
    white-space:noWrap;
    padding:${({big}) => (big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;

    &:hover{
        transition: all 0.3s ease-out;
        background:#fff;
        background:${({primary})=>(primary ? '#0467fb' : '#4b59f7')};
        
        @media(max-width:996px){
            width:100%;
        }
    }
`