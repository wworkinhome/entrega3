import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Residents from './Residents';


const RickMorty = () => {

    const [ location, setLocation ] = useState({})
    const [ typeName, setTypeName ] = useState("")

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126 ) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`) 
            .then( res => setLocation( res.data ));
    }, []);

    console.log(location);

    const searchId = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${typeName}`) 
            .then( res => setLocation( res.data ));
    };

    return (
        <div>
                <div>
                    <div className='container-morty'></div>
                    <div className="container-search">
                        <input type="text" value={typeName} placeholder='Buscar de 1 - 126' onChange={e => setTypeName( e.target.value )}/>
                        <button onClick={searchId}>Search</button>
                    </div>
                    <div className='container-info'>
                    <p><h2>Name:</h2> {location.name}</p>
                    <p><h2>Type:</h2> {location.type}</p>
                    <p><h2>Dimension:</h2> {location.dimension}</p>
                    <p><h2>Population:</h2> {location.residents?.length}</p>
                    </div>
                </div>
                <br />
                <div className='container-cards'>
                    {
                        location.residents?.map((location) => 
                            <Residents url={location} key={location}/>
                        )
                    }
                </div>
        </div>
    );
};

export default RickMorty;