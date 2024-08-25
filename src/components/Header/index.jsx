import React from "react";
import styled from "styled-components";
import rato from "../../assets/images/Ratos.png"

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    background-color: #802c73;
    height: 40px;
    width: 100%;
`
const Title = styled.p`
    font-size: 20px;
    color: #cece5a;
    font-weight: 700;
    align-self: center;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    margin-left: 18px;
`
const Icon = styled.img`
    height: 30px;
    align-self: center;
    width: auto;
    margin-left: 18px;
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

