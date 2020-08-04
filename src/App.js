import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Card from './Components/Cards';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5 pt-3">
              <h2 className="text-left navy-text pb-5"><span>Our</span> Industry</h2>
            </div>
            <div class="col-12 col-md-7">
              <p className="grey-text font-weight-bold pb-5">We help organisations work smarter and grow faster. Reach out to us to build effective organisations, reduct costs, manage risk and regulation and leverage talent.</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center justify-content-sm-around  justify-content-lg-between ">
          <Card
            title="Corporate Finance"
            icon="fa fa-4x fa-pie-chart" />
          <Card
            title="Economic Consulting"
            icon="fa fa-4x fa-bar-chart" />
          <Card
            title="Forensic & Litigation"
            icon="fa fa-4x fa-bell-o" />
          <Card
            title="Strategic Communications"
            icon="fa fa-4x fa-microphone" />
          <Card
            title="Technology Consulting"
            icon="fa fa-4x fa-desktop" />
          <Card
            title="Healthcare Consulting"
            icon="fa fa-4x fa-medkit" />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
