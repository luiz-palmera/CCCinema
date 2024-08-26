import React from "react";
import styled from "styled-components";
import rato from "../../assets/images/Ratos.png"

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    background-color: #802c73;
    height: 50px;
    width: 100%;
`
const Title = styled.p`
    font-size: 20px;
    color: #d8d838;
    font-weight: 600;
    align-self: center;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
`
const Icon = styled.img`
    height: 40px;
    align-self: center;
    width: auto;
    margin-left: 100px;
`

export const Header = () => {
    return(
            <Wrapper>
                <Icon src={rato}/>
                <Title>
                    CCCinema
                </Title>
            </Wrapper>
    )
}

