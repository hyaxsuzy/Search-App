import React, {useState} from 'react'
import './App.css';
import AnimeData from './Data.json';
import SearchIcon from '@mui/icons-material/Search'; // material ui search icon

const SearchApp = () => {
    const [filtered, setFiltered] = useState ('');

    return (
        <div className = "row justify-content-center"> 
        {/* navigation bar */}
            <div className = "Navbar">
                <div className= "leftSide">
                    <div className = "links">
                    <a href = "/home">Home</a>
                    <a href = "/home">Feedback</a>
                    <a href = "/home">About</a>
                    <a href = "/home">Contact</a>
                    </div>
                </div>
                {/* search bar */}
                    <div className= "rightSide">
                    <input type = "text" 
                    placeholder = "Enter an Anime Title..." 
                    onChange = {event => {setFiltered(event.target.value)}} />
                    <button>
                        <SearchIcon />
                    </button>
                    </div>
                </div>
                    <div className = "col-12 mb-5">
                    <div className = "mb-3 col-4 mx-auto">
                    </div>
                    </div>
                        
                {AnimeData.filter((val) => {
                    if (filtered === "") {
                        return val
                    } else if (val.anime_name.toLowerCase().includes(filtered.toLowerCase())) {
                        return val
                    }
                // card layout component
                }).map((item, index) => {
                    return ( 
                        <div className = "col-11 col-md-6 col-lg-2 mx-2 mb-4">
                            <div className = "card p-0 h-100 text-white">
                                <div className = "inner">
                                <img src = {item.anime_img} 
                                    className = "card-img-top img-fluid"
                                    alt = "anime images" />
                                </div>
                                <div className = "card-body">
                                    <h5 className = "card-title">{item.anime_name}</h5>
                                    <p className = "card-text">{item.anime_desc}</p>
                                </div>
                                <a href = {item.anime_url} className = "btn btn-dark">URL</a>
                            </div>
                        </div>
                    )
                })}
        </div>
   
    )
}      
    
export default SearchApp