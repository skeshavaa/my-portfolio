import React, { useState } from 'react'
import axios from 'axios';

const Home = () => {

    const [Projects, setProjects] = useState([]);
    const [Loading, setLoading] = useState(true)

    

    if (!Loading){
        console.log(Projects);
    } else{
        axios.get('/api/items')
        .then((projects) => {
            setProjects(projects)
            setLoading(false)
        })
    }
    
    if (Loading){
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    } else{
        return(
            <div>
                {Projects.data.map((project) => {
                    return <h1>{project.name}</h1>
                })}
        </div>
        )
    }
}

export default Home

