import React from 'react'
import "./Search.css"
import { DateRangePicker } from "react-date-range"
// main style file
import "react-date-range/dist/styles.css";
// these css file
import "react-date-range/dist/theme/default.css"


function Search() {
    const [startDate, setStartDate] = useState(newDate());
    const [endDate, setEndDate] = useState(newDate())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        // recommended to use for date picker 
        key: "selection"
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }


    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]
            } onChange={handleSelect} />
         </div>
    )
}

export default Search
