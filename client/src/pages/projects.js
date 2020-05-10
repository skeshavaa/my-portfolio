import React, { useState } from 'react'
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

    if (Loading){
        return (
            <div>
                <Layout />
                <Heading title="Projects"/>

            </div>
        )
    }
    else{
        return(
            <div>
                {data.data.map((project) => {
                    return(
                        <h1>{project.name}</h1>
                    )
                })}
            </div>
        )
    }
}

export default Projects
