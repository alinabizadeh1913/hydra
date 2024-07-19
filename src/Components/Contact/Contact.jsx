import React from "react"
import ContactItems from "./ContactItems";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount : 0,
            items : [
                {
                    id : 1,
                    iconClassList : "fa-solid fa-location-dot",
                    title : "Pay Us a Visit",
                    content : "Union St, Seattle, WA 98101, United States"
                },
                {
                    id : 2,
                    iconClassList : "fa-solid fa-phone-volume",
                    title : "Give Us a Call",
                    content : "(110) 1111-1010"
                },
                {
                    id : 3,
                    iconClassList : "fa-regular fa-envelope",
                    title : "Send Us a Message",
                    content : "Contact@HydraVTech.com"
                },
            ]
        }

        this.contactInner = React.createRef();
        this.contactElem = React.createRef();
    }

    handleLeftArrowClick = () => {
        if (this.state.currentCount > 0) {
            this.setState({
                currentCount: this.state.currentCount - 1
            });
            setTimeout(() => {
                this.contactInner.current.style.transform = `translateX(${-(this.state.currentCount * 100)}%)`;
            }, 100)
        }
    }

    handleRightArrowClick = () => {
        if (this.state.currentCount < this.state.items.length - 1) {
            this.setState({
                currentCount: this.state.currentCount + 1
            });
            setTimeout(() => {
                this.contactInner.current.style.transform = `translateX(${-(this.state.currentCount * 100)}%)`;
            }, 100)
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="px-3">
                    <div id="contact" className="container position-relative" ref={this.contactElem}>
                        <div className="arrow d-flex justify-content-between px-3 w-100 position-absolute d-block d-lg-none">
                            <i className="fa-solid fa-angle-left" onClick={this.handleLeftArrowClick}></i>
                            <i className="fa-solid fa-angle-right" onClick={this.handleRightArrowClick}></i>
                        </div>
                        <div className="contact-inner d-flex align-items-center" ref={this.contactInner}>
                            <ContactItems data={this.state.items}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}