import React,{useState,useEffect} from 'react';
import axios from './axios'
import './Row.css'

const baseUrl='https://image.tmdb.org/t/p/original/';

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies]=useState([])
   
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    },
   // eslint-disable-next-line
    [])

 

    

    return ( 
        <div className='row'>
            {/* Title */}
            <h2 className='row__title'>{title}</h2>

            {/* Container for all the movies */}
            <div className='row__posters'>
                {
                    movies.map(movie=>{
                        return (
                            <img  key={movie.id} className={`row__poster ${isLargeRow &&'row__posterLarge'}`} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                        )
                    })
                }
            </div>
                
        </div>
     );
}
 
export default Row;