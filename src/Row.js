import React, { useState, useEffect} from 'react'
import requests from './requests'
import axios from './axios'
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original";
function Row({title,fetchUrl ,isLargeRow}) {
const [movies,setmovies] =useState([]);
const [trialerUrl,settrialerUrl] = useState("");

    useEffect(() => {
     
     async function fetchData()
     {
       const request = await axios.get(fetchUrl);
       //console.table(request.data.results);
       setmovies(request.data.results);
       return request;
     }
     fetchData();
    }, [fetchUrl]);
    
    const opts = 
    {
      height : "390",
      width: "100%",
      playerVars: {
        autoplay : 1,
      },
    };
    const handleClick = (movie) =>
    {
      console.log(movie);
      console.log('ddd');
      if(trialerUrl)
      settrialerUrl("");
      else
      {

        movieTrailer(movie.name || "")
        .then((url) => 
          {
            const urlParams = new URLSearchParams(new URL(url).search); //getting id part of  trailer
           
            settrialerUrl(urlParams.get('v'));
          }).catch((error) => console.log(error));
      }
    }
    return (
        <div>
          <h2>{title}</h2>
         <div className="row_posters">
             
             {movies.map(movie =>(
                     
                   <img 
                   key = {movie.id}
                   onClick = {() => handleClick(movie)}
                   className={`row_poster ${isLargeRow && "row_PosterLarge"}`}
                   src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}/>  
                 ))}
         </div>
        { trialerUrl && <Youtube videoId={trialerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
