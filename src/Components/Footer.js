import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="navy-bg" >
                <div className="container ">
                    <div className="row justify-content-end">
                        <div className="col-sm-4 col-md-9 text-white"></div>
                        <div className="col-sm-8 col-md-3 text-white ">
                            <h5 className="text-white font-weight-bold">Newsletter</h5>
                            <p className="grey-light-text pt-2">Subscribe to our newsletter to get notifications about new updates.</p>
                            <form className="pt-3">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                </div>
                                <button type="submit" className="btn bg-warning navy-text">SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className= "mr-2 mb-1">
                        <i className="fa fa-1x fa-angle-up bg-warning p-2 text-white"></i>
                    </div>
                </div>
                <div className=" navy-dark-bg">
                    <div className="container">
                        <div className="row justify-content-md-end justify-content-center footer-icons-row">
                            <div className="grey-bg text-center hvr-grow"><i className="fa fa-1x fa-facebook-f grey-light-text"></i></div>
                            <div className="grey-bg text-center hvr-grow"><i className="fa fa-1x fa-twitter grey-light-text"></i></div>
                            <div className="grey-bg text-center hvr-grow"><i className="fa fa-1x fa-vimeo grey-light-text"></i></div>
                            <div className="grey-bg text-center hvr-grow"><i className="fa fa-1x fa-instagram grey-light-text"></i></div>
                            <div className="grey-bg text-center hvr-grow"><i className="fa fa-1x fa-skype grey-light-text"></i></div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}