import React from 'react'
import styled from 'styled-components'

const ResumeHeading = (props) => {
    return (
        <Heading>{props.heading}</Heading>
    )
}

export default ResumeHeading

const Heading = styled.h1`
    font-family: 'Abel';
    font-size: 40px;
    text-align: center;
`
