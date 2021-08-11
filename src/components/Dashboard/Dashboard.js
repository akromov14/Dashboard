import React from 'react'
import { Link } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper';
import Huawei from '../../pages/HomePage/huawei.png';


const Dashboard = ({children}) => {
    return (
       <DashboardWrapper>
           <div className="sidebar">
               <ul>
                   <li>
                       <Link to="/" className="active">Home</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/users">Users</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/todos">Todos</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/albums">Albums</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/photos">Photos</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/posts">Posts</Link>
                   </li>
                   
               </ul>
           </div>
           <div className="rightside">
     
                <header className="shadow">
                    <img src={ Huawei } alt="" className="logo" />
                </header>
                <div className="content">
                        {children}
                </div>
           </div>
           
       </DashboardWrapper>
    )
}

export default Dashboard
