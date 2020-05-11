import React from 'react'
import styled from 'styled-components'

const Heading = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
        </Wrapper>
    )
}

export default Heading

const Wrapper = styled.div`
    width: 100vw;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 45px;
    font-family: 'Abel';
    
`