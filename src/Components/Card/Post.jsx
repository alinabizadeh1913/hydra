import React from "react";

export default class Post extends React.Component {

    constructor (props){
        super(props);
        this.state = {

        }
    }

    hoverLink(e) {
        const {currentTarget} = e;
        currentTarget.classList.add('bg-move');
    }

    outLink(e) {
        const {currentTarget} = e;
        currentTarget.classList.remove('bg-move');
    }

    endAnimationLink(e) {
        const {currentTarget} = e;
        currentTarget.classList.remove('bg-move');   
    }

    render() {
        const posts = this.props.data && this.props.data.map(post => {
            return (
                <div className="col-12 col-md-6 col-lg-3 my-2" key={post.id}>
                    <div className="post-inner d-flex flex-column flex-wrap justify-content-center align-items-center">
                        <div className="post-image d-flex justify-content-center">
                            <div className="post-image-inner">
                                <img src={post.imgSrc} alt="" />
                            </div>
                        </div>
                        <h3 className="post-title text-white mt-3 pb-1 mb-0">
                            {post.title}
                        </h3>
                        <p className="post-text mt-2 mb-0">
                            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.                    </p>
                        <a href={`/${post.href}`} className="post-link mt-4 mb-2" ref={this.postLinks} onMouseOver={this.hoverLink.bind(this)} onMouseOut={this.outLink.bind(this)} onAnimationEnd={this.endAnimationLink.bind(this)}>
                            <button>
                                TRY IT NOW
                            </button>
                        </a>
                    </div>
                </div>
            )
        })

        return (
            <div className="row g-2" id="post">
                {posts}
            </div>
        )
    }
}