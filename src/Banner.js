import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Requests';
const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return request
        }
        fetchData();
    }, []);

    console.log(movie);
    function truncate(string, n) {   //Ths function is used to show the three dots if your line is bigger it will show three dots n is number of characters from where you need those dots
        return string?.length > n ? string.substr(0, n-1)+ '...' : string;  //this means if length is greater that n then show dots after it otherwise show the str
    }
    return (
        <>
        <header className='banner' 
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:'cover',
            
            backgroundPosition: 'center center',
        }}>
           <div className='banner_contents'>
               <h1 className='banner_list'>{movie?.title || movie?.name || movie?.original_name}</h1>
               <div className='banner_buttons'>
                   <button className='banner_button'>Play</button>
                   <button className='banner_button'>My List</button>
               </div>
               <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
               </div> 
            <div className='banner--fadeBottom'/>
        </header>
        </>
    )
}

export default Banner;