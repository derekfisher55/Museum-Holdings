import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/menu.js';

var ContactPage = React.createClass ({
  render: function(){
    return(
      <div className="wholePage5">
        <Menu />
        <div className="page">
          <h1>Contact Info:</h1>
          <h2>Phone: (231) 878-3119</h2>
          <h2>Email: <a href="https://www.facebook.com/pg/Pine-River-Area-Historical-Society-604839399870173/posts/?ref=page_internal" target="_blank">Facebook page</a></h2>
          <h2>Location: PO Box 84 Tustin, Michigan 49688</h2>
          <h2>Hours: Open Saturday: 11 - 4pm </h2>
        </div>
        <img className="ContactImage" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/47179120_753295858357859_7652673449843752960_o.jpg?_nc_cat=108&_nc_ht=scontent-ort2-2.xx&oh=89bc58f35237f9ac2d9f00ab20276dc2&oe=5CA7ED0B" alt="Contact"/>
      </div>
    )
  }
});

export default ContactPage;
