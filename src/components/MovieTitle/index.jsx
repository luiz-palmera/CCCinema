import React from "react";
import styled from "styled-components";


const Title = styled.h2`
    position: absolute;
    color: #802c73;
    left: 25px;
    top: -10px;
    border-color: black;
    font-family: "Dela Gothic One", sans-serif;
    font-size: 60px; 
`

export const MovieTitle = () => {
    return(

            <Title>
                Ratatouille (2007)
            </Title>
    )
}



