import React, { state } from 'react'
import { Link, useParams } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper';
import Huawei from '../../pages/HomePage/huawei.png';
import { AiFillHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BsTable } from 'react-icons/bs';
import { IoMdAlbums } from 'react-icons/io';
import { IoMdPhotos } from 'react-icons/io';
import { GiPostStamp } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import './dashboard.css';
import { Slide } from 'react-awesome-reveal'
import { toggleMenu } from '../../redux/action'
import { List, Button, ListItem  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//AiFillHome
//FaUsers
//BsTable
//IoMdAlbums
//IoMdPhotos
//GiPostStamp
//GiHamburgerMenu

const menus = [
    { to: "home", title: "Home", icon: <AiFillHome /> },
    { to: "users", title: "Users", icon: <FaUsers />},
    { to: "todos", title: "Todos", icon: <BsTable /> },
    { to: "albums", title: "Albums", icon: <IoMdAlbums /> },
    { to: "photos", title: "Photos", icon: <IoMdPhotos /> },
    { to: "posts", title: "Posts", icon: <GiPostStamp /> },
]



const Dashboard = ({children}) => {
    const dispatch = useDispatch();
    const { menu } = useParams();

    const show = useSelector(state => state.isSidebarShow);

    return (
       <DashboardWrapper>
           <div className={`sidebar ${show && "show" || ""}`}>
            <h1 className="text-white">Sidebar</h1>
                <List component="nav">
                    {menus.map((v, i) => <li>
                        <Slide delay={i * 30}>
                            <Link key={v.to} to={`/dashboard/${v.to}`}
                                className={`${menu === v.to ? "active" : ""}`}>
                                <ListItem button >
                                    <span  className="me-2" />{v.icon} {v.title}
                                </ListItem>
                            </Link>
                        </Slide>
                    </li>)}

                   {/* <li>
                       <Link to="/" className="active icons2"><AiFillHome className="me-2"/> Home</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/users"><FaUsers className="me-2"/> Users</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/todos"><BsTable  className="me-2"/>Todos</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/albums"><IoMdAlbums className="me-2"/> Albums</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/photos"><IoMdPhotos className="me-2"/> Photos</Link>
                   </li>
                   <li>
                       <Link to="/dashboard/posts"><GiPostStamp className="me-2"/> Posts</Link>
                   </li> */}
                   
                </List>
           </div>
           <div className="rightside">
     
                <header className="shadow flexss">
                   <div>
                        <Button onClick={() => toggleMenu(dispatch)} variant="contained" disableElevation >
                            <GiHamburgerMenu />
                        </Button>
                        
                   </div>
                    <img src="https://cdn-wp.thesportsrush.com/2019/08/GettyImages-1151976644.jpg" alt="" className="logo2"/>
                </header>
                <div className="content">
                        {children}
                </div>
           </div>
           
       </DashboardWrapper>
    )
}

export default Dashboard;
