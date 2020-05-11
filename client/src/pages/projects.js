import React, { useState, useEffect } from 'react'
import LoadingCards from '../sections/loading-cards'
import ProjectCards from '../sections/project-cards'
import Layout from '../components/layout'
import Heading from '../components/heading'
import axios from 'axios'
import styled from 'styled-components'


const Projects = () => {

    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('api/items')
        .then((projects) => {
            setData(projects);
            setLoading(false);
        })
    }, []);


    let Cards = Loading
        ? <LoadingCards count={3}/>
        : <ProjectCards projects={data}/>

    return (
        <Wrapper>
            <Layout />
            <Heading title="Projects"/>
            {Cards}
        </Wrapper>
    )
}

export default Projects

const Wrapper = styled.div`
    max-width: 100vw;
`