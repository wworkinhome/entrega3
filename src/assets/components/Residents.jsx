import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({ url }) => {

    const [ cardsMorty, setCardsMorty ] = useState({})

    useEffect(() => {
        axios.get(url)
            .then( (res) => setCardsMorty( res.data ))
    }, [])

    console.log(cardsMorty)


    return (
        <div className='container-location'>
            <>
                <div>
                    <small><b className={`status-${cardsMorty.status}`}><i className='bx bxs-circle bx-ms'></i> {cardsMorty.status}</b></small>
                    <img src={cardsMorty.image} alt="Loading..." />
                </div>
                <h2>
                    {cardsMorty.name}
                </h2>
                <div className='info-card'>
                    <hr/>
                    <p><span>Raza:</span> {cardsMorty.species}</p>
                    <p><span>Genero:</span> {cardsMorty.gender}</p>
                    <p><span>Origen:</span> {cardsMorty.origin?.name}</p>
                    <p><span>Aparición en episodio:</span> {cardsMorty.episode?.length}</p>
                </div>
            </>
        </div>
    );
};

export default Residents;