import React, { Component } from 'react'
import "./footer.css";
import "./footercontent";
import FooterContent from './footercontent';

export class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer-top-strip"></div>
                <div id="footer-bottom-strip">
                    <FooterContent></FooterContent>
                </div>
            </div>
        )
    }
}

export default Footer
