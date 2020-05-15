import React from 'react'
import styled from 'styled-components'
import LoadingCard from '../components/loading-card'

const LoadingCards = (props) => {

    var Cards = [];

    for (var i = 0; i < props.count; i++){
        Cards.push(<LoadingCard />);
    }

    return (
        <OuterWrapper>
            <Wrapper>
                {Cards}
            </Wrapper>
        </OuterWrapper>
    )
}

export default LoadingCards

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 98vw;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90vw;
`