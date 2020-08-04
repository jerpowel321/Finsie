import React from 'react';

export default class Jumbotron extends React.Component {

    render() {
        return (
            < div class="jumbotron jumbotron-fluid d-flex align-items-md-center" >
                <div class="container text-left ">
                    <p class="font-weight-bold">KEEPING YOUR WEB PRESENCE</p>
                    <h1 class=" navy-text">Elegant & Efficient!</h1>
                    <p class="lead mb-5 mt-4 grey-text">With over 20 years of experience we'll ensure you always get the best guidance!</p>
                    <button type="button" class="btn bg-warning mr-3">OUR COMPANY</button>
                    <button type="button" class="btn navy-bg text-white">CONTACT US</button>
                </div>
            </div >
        )
    }
}