import React from 'react'
import { image_url} from '../constant'
import { useNavigate } from 'react-router-dom';

function Card({show,type}) {
    let navigate = useNavigate();
    const setTvId = (id) => {
        sessionStorage.setItem('tvId',id);
        navigate(`/${type}/${show.id}`, { replace: true });
    }

    return (
        <>
            <div onClick={()=>{setTvId(show.id)}}  className="card">
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img src={image_url+show.poster_path} alt={show.name}/>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Card
