import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <h1>I am the search page</h1>
            <div className="searchPage__info">
                <p>62 stays - 26 August to 30 August - 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London" title="Stay at this spacious Edwardian House" description=" 1 guess - 1 bedroom - 1 bath - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
            star={4.75} price="$40 / night" total="$120 total"/>
            <SearchResult img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London" title="Stay at this spacious Edwardian House" description=" 1 guess - 1 bedroom - 1 bath - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
            star={4.75} price="$40 / night" total="$120 total"/>
        </div>
    )
}

export default SearchPage
