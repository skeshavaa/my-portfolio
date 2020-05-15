import React from 'react'
import styled from 'styled-components'

const Spacer = (props) => {
    return (
        <Wrapper space={props.space}>
        </Wrapper>
    )
}

export default Spacer

const Wrapper = styled.div`
    padding-top: ${props => props.space}
`