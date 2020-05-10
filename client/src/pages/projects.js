import React, { useState } from 'react'
import LoadingCards from '../sections/loading-cards'
import ProjectCards from '../sections/project-cards'
import Layout from '../components/layout'
import Heading from '../components/heading'
import axios from 'axios'


const Projects = () => {

    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    axios.get('api/items')
        .then((projects) => {
            setData(projects);
            setLoading(false);
        })

    // let Cards = Loading
    //     ? <LoadingCards count={3}/>
    //     : <ProjectCards />

    return (
        <div>
            <Layout />
            <Heading title="Projects"/>
            {/* {Cards} */}
            <LoadingCards count={3}/>
        </div>
    )
}

export default Projects
