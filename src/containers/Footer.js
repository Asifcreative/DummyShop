import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <>
           
            <div id="foot-sidebar" className="bg-warning pt-4 text-light">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <div class="foot-widget">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Customer Service</a></li>
                                    <li><a href="/"><span>Advanced Search</span></a></li>
                                    <li><a href="/">Orders and Returns</a></li>
                                    <li><a href="/"><span>Contact Us</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="foot-widget">
                                <h4>Why buy from us</h4>
                                <ul>
                                    <li><a href="/">Customer Service</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/"><span>Site Map</span></a></li>
                                    <li><a href="/"><span>Search Terms</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="foot-widget">
                                <h4>My account</h4>
                                <ul>
                                    <li><a href="/">Sign In</a></li>
                                    <li><a href="/">View Cart</a></li>
                                    <li><a href="/">My Wishlist</a></li>
                                    <li><a href="/">Track My Order</a></li>
                                    <li><a href="/">Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="foot-widget">
                                <h4>Contact Us</h4>
                                <address>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fas fa-home"></i> : http://asifjaved.codemindz.com/</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-mail-bulk"></i> : asifjaved.creative@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fas fa-mobile-alt"></i> : +92-334-5622698</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </address>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <footer className="footer-area">
                <div className="Container bg-warning text-white py-4 d-flex justify-content-center">
                    <hr className="fs-3" />
                    <h6><span>DummyShop By&nbsp;&nbsp;</span></h6>
                    <p><Link aria-current="page" to="/">ASIF JAVED</Link>
                        <span> &reg; {new Date().getFullYear()}</span>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
