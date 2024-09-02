import React from "react";
import styled from "styled-components";
import rato from "../../assets/images/Ratos.png";

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    background-color: #802c73;
    height: 60px;
    width: 100%;
`;

const Title = styled.p`
    font-size: 20px;
    color: #ecec2f;
    font-weight: 600;
    align-self: center;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
`;

const Icon = styled.img`
    height: 35px;
    align-self: center;
    width: auto;
    margin-left: 100px;
    &:hover{
        height:42px;
        transition: 0.3s;
    }
`;

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

