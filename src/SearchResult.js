import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function SearchResult({img, location, title, description, star, price, total}) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className="searchResult__info">
                
            </div>
        </div>
    )
}

export default SearchResult
