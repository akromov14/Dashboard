import React from 'react'
import { useParams } from 'react-router-dom'
import Todos from '../Todos';
import Albums from '../../pages/Albums/Album'
import Dashboardss from '../../components/Dashboard';
import Photos from '../Photos';

const Dashboard = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboardss>
            
           {menu === "todos" && <Todos/> || ""}
           {menu === "albums" && <Albums/> || ""}
           {menu === "photos" && <Photos/> || ""}
        </Dashboardss>
    )
}

export default Dashboard
