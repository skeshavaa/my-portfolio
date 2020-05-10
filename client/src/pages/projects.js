import React, { useState, useEffect } from 'react'
import LoadingCards from '../sections/loading-cards'
import ProjectCards from '../sections/project-cards'
import Layout from '../components/layout'
import Heading from '../components/heading'
import axios from 'axios'


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
        <div>
            <Layout />
            <Heading title="Projects"/>
            {Cards}
        </div>
    )
}

export default Projects
