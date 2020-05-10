import React, { useState } from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import axios from 'axios'

const Projects = () => {

    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)

    axios.get('api/items')
        .then((projects) => {
            setData(projects);
            setLoading(false);
        })
    

    let place = Loading ? <h1>true</h1> : <h1>false</h1>

    return (
        <div>
            <Layout />
            <Heading title="Projects"/>
            {place}
        </div>
    )
}

export default Projects
