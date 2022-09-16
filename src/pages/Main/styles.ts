import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${({theme}) => theme.colors.blue_800};
`

export const Content = styled.main`
    height: 50%;
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const Timer = styled.div`
    width: 13rem;
    height: 13rem;
    
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 10px solid ${({theme}) => theme.colors.blue_700};

    span {
        font-size: x-large;
        font-weight: bold;

        color: #fff;
    }

`