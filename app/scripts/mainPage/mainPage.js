import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/menu.js';

var MainPage = React.createClass ({
  render: function(){
    return(
    <div className="wholePage">
      <Menu />
      <img className="HomeImage" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36774242_647596808927765_2692114333248258048_o.jpg?_nc_cat=100&_nc_ht=scontent-ort2-2.xx&oh=45be05a0378ec496a13153e1e936f097&oe=5CA43538" alt="Home"/>
    </div>
    )
  }
});

export default MainPage;
