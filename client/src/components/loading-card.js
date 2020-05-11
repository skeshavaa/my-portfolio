import React from 'react'
import styled from 'styled-components'
import { Card } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';

const LoadingCard = () => {
    return (
        <OuterWrapper>
            <Card>
                <ProjectWrapper>
                    <Skeleton variant="rect" width={400} height={200} animation="wave" />
                    <Container>
                        <Padding space="15px"/>
                        <Skeleton variant="rect" width={300} height={18} />
                        <Padding space="25px"/>
                        <Skeleton variant="rect" width={350} height={18} />
                        <Padding space="10px"/>
                        <Skeleton variant="rect" width={350} height={18} />
                        <Padding space="10px"/>
                        <Skeleton variant="rect" width={120} height={18} />
                    </Container>
                </ProjectWrapper>
            </Card>
        </OuterWrapper>
    )
}

export default LoadingCard

const ProjectWrapper = styled.div`
    min-width: 300px;
    max-width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
`

const OuterWrapper = styled.div`
    margin: 15px 5px 15px 5px; 
`

const Padding = styled.div`
    padding-top: ${props => props.space}
`

const Container = styled.div`
    padding-left: 25px;
`