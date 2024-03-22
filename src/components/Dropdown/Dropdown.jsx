
import {useState} from "react"
import React from 'react'

const Dropdown = () => {
    const [dropdownHours, setDropdownHours] = useState(false)

    const dropdownOptions = [
        {
            id: 1,
            label: "Monday",
            value: "08:00AM-04:00PM",
        },
        {
            id: 2,
            label: "Tuesday",
            value: "08:00AM-04:00PM",
        },
        {
            id: 3,
            label: "Wednesday",
            value: "08:00AM-04:00PM",
        },
        {
            id: 4,
            label: "Thursday",
            value: "08:00AM-04:00PM",
        },
        {
            id: 5,
            label: "Friday",
            value: "08:00AM-04:00PM",
        },
        {
            id: 6,
            label: "Saturday",
            value: "Closed",
        },
        {
            id: 7,
            label: "Sunday",
            value: "Closed",
        },
        
    ]

  return (
    <div className='dropdown'>
      <button className="Hours">Hours

      </button>
    </div>
  )
}

export default Dropdown
