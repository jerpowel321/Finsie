import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="contact row p-3 justify-content-center justify-content-md-end">
                        <div className="col-lg-2"></div>
                        <div className="col-12 col-sm-5 col-md-5 col-lg-3 m-2">
                            <div className="row align-items-center">
                                <div className="col-2 col-sm-1 ">
                                    <i className=" fa fa-1x fa-phone text-warning pr-2"></i>
                                </div>
                                <div className="col-10 col-sm-10 ">
                                    <p className="navy-text font-weight-bold">001-1234-88888</p>
                                    <span className="grey-text">info.deercreatuve@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-7 col-md-5 col-lg-4 mt-2 mb-2">
                            <div className="row align-items-center">
                                <div className="col-2 col-sm-1 ">
                                    <i className="fa fa-1x fa-map-marker text-warning"></i>
                                </div>
                                <div className=" col-10 col-sm-10 col-lg-8">
                                    <p className="navy-text font-weight-bold">40 Baria Street 133/2</p>
                                    <span className="grey-text">New York City, US</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn bg-warning m-2">GET A QUOTE</button>
                    </div>
                </div>
                <nav className="navbar navbar-dark navbar-expand-lg navy-bg text-white">
                    <div className="container text-white">
                        <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto text-white">
                                <li className="nav-item active" >
                                    <a className="nav-link text-white" href="/">HOME <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/pages">PAGES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/projects">PROJECTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/news">NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/shop">SHOP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contact">CONTACT</a>
                                </li>
                            </ul>
                            <div class="">
                                <i style={{ fontSize: "20px" }} className="fa  fa-search text-white mr-md-3"></i>
                                <i style={{ fontSize: "20px" }} className="fa fa-1x fa-shopping-cart text-white"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}