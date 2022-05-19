import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./assets/css/bootstrap.min.css"
import "./assets/css/agency.min.css"
import Portfolio from './Portfolio'
function LandingPage() {
    const portfolioLinks = [
        {
            title: 'Royal Suite Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/suite/royalsuite/180928-7-2000-roo-LTHA.jpg.thumb.768.768.jpg',
            bedType: 'Bed type: King',
            size: 'Size: 329 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'
        },
        {
            title: 'Deluxe Suite Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg',
            bedType: 'Bed type: King',
            size: 'Size: 99 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'
        },
        {
            title: 'Premier Suite Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/suite/premiersuite/180927-1-2000-roo-LTHA.jpg.thumb.1920.1920.jpg',
            bedType: 'Bed type: King',
            size: 'Size: 147 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'

        },
        {
            title: 'Presidential Suite Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/suite/presidentialsuite/180712-30-2000-acc-hanoi-hotel.jpg.thumb.1920.1920.jpg',
            bedType: 'Bed type: King',
            size: 'Size: 199 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'
        },
        {
            title: 'Junior Suite Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/club-floor/clubjuniorsuiteroom/180712-8-2000-acc-hanoi-hotel.jpg.thumb.1920.1920.jpg',
            bedType: 'Bed type: King/Twin',
            size: 'Size: 61~64 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'
        },
        {
            title: 'Standard Deluxe Room',
            caption: 'Overview',
            image: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/suite/deluxesuite/180921-2-2000-roo-LTHA.jpg.thumb.1920.1920.jpg',
            bedType: 'Bed type: King/Twin',
            size: 'Size: 42~44 ㎡',
            occupancy: 'Occupancy: 2 persons',
            checkIO: ' Check-in / Check-out: 14:00/12:00 ',
            view: 'View: City'
        },

    ]
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    return (
        <React.Fragment>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a style={{ color: "#fed136" }} className="navbar-brand js-scroll-trigger" href="#home">Brand Hotel</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <a style={{ color: "#fed136" }} className="nav-link js-scroll-trigger" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#fed136" }} className="nav-link js-scroll-trigger" href="#portfolio">Rooms</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#fed136" }} className="nav-link js-scroll-trigger" href="#about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#fed136" }} className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#fed136" }} className="nav-link js-scroll-trigger" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <header className="masthead" id="home">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To Our Hotel!</div>
                            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                            <Link to="/login">
                                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services" >
                                    Get started!
                                </a>
                            </Link>
                        </div>
                    </div>
                </header>


                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">MEETINGS & EVENTS</h4>
                                <p className="text-muted"> PERFECT PLACE TO ORGANIZE MEETINGS AND EVENTS .</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-cutlery fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">RESTAURANTS & BARS</h4>
                                <p className="text-muted">25 RESTAURANTS & BARS ALL OVER THE COUNTRY.</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">MORE SERVICES</h4>
                                <p className="text-muted">SPA & MASSAGE, SWIMMING POOL, GYM, KARAOKE,...</p>
                            </div>
                        </div>
                    </div>
                </section>


                <Portfolio portfolioLinks={portfolioLinks}></Portfolio>


                <section className="page-section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">About Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>1997</h4>
                                                <h4 className="subheading">Our Humble Beginnings</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">The very first page of Nhom2 Hospitality’s history was written on July 1st, 1997 when the first hotel’s construction began in Dien Bien Phu City, Nhom2 Holiday Dien Bien Phu.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>March 2003</h4>
                                                <h4 className="subheading"> Linh Dam</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">The Chairman Mr. Le Thanh Than, made a decision to turn the investment into Hanoi with the birth of Nhom2 Linh Dam, marking a new development of the Group, spreading the wings of Nhom2 to fly everywhere.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>December 2012</h4>
                                                <h4 className="subheading">Centralize the operation</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Administration and Operation Office was established, to centralize the operation of units throughout the country with consistent quality standards and images. </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>July 2018</h4>
                                                <h4 className="subheading">Until Now!</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">It became the founding member of National Tourism Advisor Board and received the honorable award of Vietnam National Administration of Tourism, recognizing "Enterprise with the most contribution to Vietnam's Tourism.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>Be Part
                                                <br />Of Our
                                                <br />Story!</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section style={{ height: "100%" }} className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Phone number : (+84) 123456789</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="numOfRoom" type="number" placeholder="Number of rooms *" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>


                {/* <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Your Website 2019</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">
                                            <i className="fa fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="#something">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#something">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </div>

        </React.Fragment>

    )
}

export default LandingPage;