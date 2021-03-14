import React, { useState, useEffect} from 'react'
import './App.css';
import Row from './Row';
import Nav from './Nav';
import requests from './requests'
import axios from './axios'
import Banner from './Banner'
import {auth} from "./firebase"
function App() {
 //auth.createUserWithEmailAndPassword("cool@gmail.com","12345678");
  return (

    <div className="App">
        <Nav/>
        <Banner/>
        <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} isLargeRow = "1"/>
        <Row title ="Trending Now" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title ="Top rated" fetchUrl={requests.fetchTopRated}/>
        <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title ="Comedy Movies" fetchUrl={requests.fetchComendyMovies}/>
        <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
