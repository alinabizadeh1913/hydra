import React from "react";

export default class Skeleton extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="d-flex flex-md-wrap" id="skeleton">
                <div className="col-12 col-md-6 col-lg-3 my-3 px-5 px-lg-2">
                    <div className="skeleton-inner d-flex flex-column flex-wrap justify-content-center align-items-center">
                        <div className="skeleton-image d-flex justify-content-center">
                            <div className="skeleton-image-inner">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="skeleton-title my-3"></div>
                        <div className="skeleton-border"></div>
                        <div className="skeleton-text">
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                        </div>
                        <div className="skeleton-link mt-4 mb-2"></div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3 px-5 px-lg-2">
                    <div className="skeleton-inner d-flex flex-column flex-wrap justify-content-center align-items-center">
                        <div className="skeleton-image d-flex justify-content-center">
                            <div className="skeleton-image-inner">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="skeleton-title my-3"></div>
                        <div className="skeleton-border"></div>
                        <div className="skeleton-text">
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                        </div>
                        <div className="skeleton-link mt-4 mb-2"></div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3 px-5 px-lg-2">
                    <div className="skeleton-inner d-flex flex-column flex-wrap justify-content-center align-items-center">
                        <div className="skeleton-image d-flex justify-content-center">
                            <div className="skeleton-image-inner">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="skeleton-title my-3"></div>
                        <div className="skeleton-border"></div>
                        <div className="skeleton-text">
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                        </div>
                        <div className="skeleton-link mt-4 mb-2"></div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-3 px-5 px-lg-2">
                    <div className="skeleton-inner d-flex flex-column flex-wrap justify-content-center align-items-center">
                        <div className="skeleton-image d-flex justify-content-center">
                            <div className="skeleton-image-inner">
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="skeleton-title my-3"></div>
                        <div className="skeleton-border"></div>
                        <div className="skeleton-text">
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                            <div className="line mt-3"></div>
                        </div>
                        <div className="skeleton-link mt-4 mb-2"></div>
                    </div>
                </div>
            </div>    
        )
    }
}