import styled from "styled-components";

export const Container = styled.button`
    width: 100px;
    height: 100px;

    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: x-large;

    color: #fff;
    background-color: ${({theme}) => theme.colors.blue_700};

    transition: all .2s;

    &:hover {
        filter: brightness(0.9);
    }
`