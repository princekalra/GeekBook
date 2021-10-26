import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./home.css";

function Home(props) {
    return (
        <>
       <Topbar/>
      <div className = "homeContainer">
      <Sidebar/>
       <Feed/>
       <Rightbar/>
      </div>
       </>
    );
}

export default Home;