import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileBrowser: false
        }
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize = () => {
        if (navigator.userAgent.match(/mobile/gi) || window.innerWidth < 900) {
            this.setState({
                mobileBrowser: true
            })
        } else {
            this.setState({
                mobileBrowser: false
            })
        }
    }


    render() {
        if (this.state.mobileBrowser) {
            return (
                <React.Fragment>
                    <div className="navbar-mobile">
                        <div className="hamburgerNav">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <span className="logo-mobile">Company</span>
                        <div className="snowmanNav">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <nav className="navbar">
                        <span className="logo">Company</span>
                        <ul className="navbar-menu">
                            <li className="navbar-item"><a className="header-anchor" href="#">About Us </a></li>
                            <li className="navbar-item"><a className="header-anchor" href="#">Services</a></li>
                            <li className="navbar-item"><a className="header-anchor" href="#">Contact</a></li>
                        </ul>
                    </nav>
                </React.Fragment>
            )
        }
    }
}

export default Header