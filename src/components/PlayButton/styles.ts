import styled from "styled-components";

export const Container = styled.button`
    width: 100px;
    height: 100px;

    border-radius: 50%;
    
    color: #fff;
    background-color: ${({theme}) => theme.colors.blue_700};

    box-shadow: rgba(166,225,250, 0.9)  0px 8px 24px;
`