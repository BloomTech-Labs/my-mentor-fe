import React from "react";
import styled from "styled-components";

const BoxLeft = styled.div`
font-size: 25px;
background-color: #052354;
width: 50%;
height: 750px;
`
const H1 = styled.h1`
color: white;
`
const P = styled.p`
color: white;
`
const BoxRight = styled.div`

`


export default function Home() {
    return (
        <div>
            <BoxLeft>
                <H1>Connect to your future, rewrite the past</H1>
                <P>Search for mentors</P>
                <P>Sponser a mentee</P>
                <P>Customize your search</P>
                <P>Be apart of a community</P>
            </BoxLeft>
            <BoxRight>
                <img src="frontend/src/photos/joshua-ness--bEZ_OfWu3Y-unsplash.jpg" alt="Mentor and Mentee drinking coffee"/>
            </BoxRight>
        </div>
    )
}