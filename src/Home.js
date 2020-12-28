import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im+w=720"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family" />
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im+w=720"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family" />
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im+w=720"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family" />
    
            </div>

            <div className="home__section">
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="3 Bedroom Flat in Bourenmouth" description="Superhost with a stunning view of the beachside in Sunny
                Bourenmouth" price="$130/night" />
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="3 Bedroom Flat in Bourenmouth" description="Superhost with a stunning view of the beachside in Sunny
                Bourenmouth" price="$130/night" />
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" title="3 Bedroom Flat in Bourenmouth" description="Superhost with a stunning view of the beachside in Sunny
                Bourenmouth" price="$130/night" />
            </div>
        </div>
    )
}

export default Home
