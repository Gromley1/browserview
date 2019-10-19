import React from 'react';
import './Main.css'

class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="main-body">
                        <h1 className="main-info">Web development is fun</h1>
                        <span className="main-info-two  ">Thanks for taking this Challenge. We're excited to see how you tackle this challenge</span>
                        <div className="btn-container">
                            <button className="learn-more"><span className="btn-text">Learn More</span></button>
                            <button className="get-in-touch">Get in Touch</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }

}

export default MainComponent