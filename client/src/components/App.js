import React, { Component } from 'react';
import { Route } from "react-router-dom";
import reactRouter2 from './router2'
import $ from 'jquery';

// css
import '../css/new.css';
import '../css/styles.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
// import Footer from './Footer/Footer';

// Sidebar
import Sidebar from './Sidebar/Sidebar';

// login
import LoginForm from './LoginForm';

class App extends Component {

	componentDidMount(){
		(function($) {
		"use strict";

		// Add active state to sidbar nav links
		var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
			$("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
				if (this.href === path) {
					$(this).addClass("active");
				}
			});

		// Toggle the side navigation
		$("#sidebarToggle").on("click", function(e) {
			e.preventDefault();
			$("body").toggleClass("sb-sidenav-toggled");
		});
	})($);

  }
	
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
		<Sidebar/>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/reactRouter2' component={reactRouter2} />        
      </div>
    );
  }
}

export default App;