/**
 * This component will receive a data from the App component and 
 * create a string of how many years, months, and days since that date
 */

import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

/**
 * Name of the class "AgeStats" usually takes the name of our file
 */
class AgeStats extends Component {
    
    /**
     * Function to return the number of years, months and days
     * between the current date and inputted date
     * in local time
     */
    timeSince(date) {

        // Prompt for a birthday
        if (date === "") {
            return `Please select a valid birthday.`
        }

        let today = new Date();
        let other_date = new Date(date);
        let yearSince = other_date.getFullYear();
        let monthSince = other_date.getMonth();
        let daySince = other_date.getDate();
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth();
        let currentDay = today.getDate();
        
        let daysOfMonths = {1:31,2:30,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

        let year = currentYear - yearSince;
        let month = currentMonth - monthSince;
        let day = currentDay - daySince;
        
        // Check your age
        if ( year >= 0 ) {
            if ( day < 0 ) { day = daysOfMonths[currentMonth-1] - daySince + currentDay; month -= 1; }
            if ( month < 0 ) { month += 12; year -= 1; }
        }

        // Hey! You are from the future! Age will be calculated again
        if ( year < 0 ) { 
            year = currentYear - yearSince;
            month = currentMonth - monthSince;
            day = currentDay - daySince;
        }
        
        // Return your age
        return `You are ${year} years, ${month} months, and ${day} days old!`;
    }

    /**
     * render() method to display the UI elements
     * this.date.props to get the returned value from the App Component
     */
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>{this.timeSince(this.props.date)}</h4>
                <img src={partyPopper} alt="Picture of a party popper" className="party-popper"/>
            </div>
        )
    }
}

export default AgeStats;