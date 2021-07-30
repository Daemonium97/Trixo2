import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class BottomBar extends Component {
    render() {
        return (
            <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Copyright 2021 Trixo. Design by <a href="https://portafolio-daemonium97.vercel.app/" target="_blank" rel="noreferrer">Daemonium</a></p>
                                </div>
                                <ul className="menu-footer">
                                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                                    
                                </ul>
                                {/* <!-- /.menu-footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
                /* <!-- /.footer-bottom --> */
        );
    }
}

export default BottomBar;