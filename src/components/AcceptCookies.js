import React, { Component } from 'react'
import cookie from 'react-cookies'

export default class AcceptCookies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "cookie-banner"
        }

        this.updateClass = this.updateClass.bind(this);
    }

    componentDidMount() {
        if (cookie.load('acceptedCookies')) {
            this.setState({class: "cookie-banner fade-out-bottom"})
        }
    }

    updateClass() {
        this.setState({class: "cookie-banner fade-out-bottom"})
        var date = new Date();
        date.setTime(date.getTime()+(365*24*60*60*1000));
        var d = date.toGMTString();
        cookie.set("gatsby-gdpr-google-analytics", true, {path: "/", expires: d});
    }

    render() {
        return (
            <div className={this.state.class}>
                <div className="text">
                    <p className="lead">We use cookies to ensure you get the best experience on our website.</p>
                </div>
                <div className="buttons">
                    <a href="#">Learn More</a>
                    <button onClick={() => this.updateClass()}>Accept</button>
                </div>
             </div>
        )
    }
}

