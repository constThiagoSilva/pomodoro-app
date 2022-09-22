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
    background-color: ${({theme}) => theme.colors.blue_900};

    box-shadow: rgba(0, 0, 0, 0.6) 0px 8px 24px;

    transition: all .2s;

    &:hover {
        filter: brightness(0.9);
    }
`