import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/menu.js';

var AnnouncmentsPage = React.createClass ({
  render: function(){
    return(
      <div className="wholePage2">
        <Menu />
        <div className="page">
          <div className="column">
            <h1>Announcements:</h1>
            <h2>December 14, 2018: Reminder</h2>
            <p>If you haven't visited lately... you must! Many changes and
            improvements to displays.</p>
            <p>Open Saturdays, 11-4 beginning the Saturday
            before Memorial day. Put it on your 'to do' list!</p>

            <h2>November 17, 2018: Event</h2>
            <p>Come join us on Monday, November 26 at 7 at the Tustin Community
            Center. Corlene Holmquist will present a program about "Tomtens",
            the kind and secretive little winter elves of Scandinavian folklore.</p>
            <p>Refreshments will be served after the program.
            Bring a friend!</p>

            <h2>September 02, 2018: New Hours!</h2>
            <p>Pine River Museum will now be open on Saturdays!</p>
            <p>Be sure to stop in today!</p>
          </div>
        </div>
        <img className="AnnImage" src="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/47320575_751517041869074_8767077743574646784_n.jpg?_nc_cat=100&_nc_ht=scontent.fdet1-1.fna&oh=ff75251edb88c3e14e51841214d5311d&oe=5CAD5CFE" alt="Contact"/>
      </div>
    )
  }
});

export default AnnouncmentsPage;
