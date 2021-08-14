import React from 'react'

import HomeWrapper from './HomeWrapper'
import Cards from './data'


const Home = () => {
    
    return (
       
            <HomeWrapper>
                <h1>Home</h1>
               <div>
                    {
                            Cards.map(v=>{
                                <div className="card">
                                    <img src={v.img} alt="" className="narutoimg" key={v.to}/>
                                    <p key={v.to}>{v.title}</p>
                                
                                </div>
                                return 
                            })
                        }
               </div>
           </HomeWrapper>
        
    )
}

export default Home;
