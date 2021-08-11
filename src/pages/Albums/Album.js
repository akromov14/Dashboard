import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAlbums } from '../../redux/action';
import AlbumsWrapper from './AlbumsWrapper';


const Album = () => {
    const { menu } = useParams();
    console.log("albumni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch);
    }, []);

   const data = useSelector(state => state.albums);
    return (
        <AlbumsWrapper>
            <div className="row">
                {
                    data.map(v =>

                        <div className="col-md-4">
                            <div className="card">
                                <div>
                                    <h4> Title: {v.title}</h4>
                                </div>
                                <div>
                                    <h4>id: {v.id}</h4>
                                </div>
                            </div>
                        </div>
                        
                        

                        )
                }
            </div>
           
        </AlbumsWrapper>
    )
}

export default Album;
