import React from "react";
import Post from "./Post";
import Skeleton from "./Skeleton";

export default class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          readyToGetPosts : false,
          post : null
        }

        this.cardSection = React.createRef();
    }

    componentDidMount() {
      window.addEventListener('scroll',this.handleScroll.bind(this));
    }

    componentDidUpdate(prevProps,prevState){
      if(prevState.readyToGetPosts !== this.state.readyToGetPosts) {
        fetch('http://localhost:5000/Posts').then(response => response.json()).then(result => {
          this.setState({
            post : result
          })
        }).catch(e => console.log(e))
      }
    }

    handleScroll(){
      const rect = this.cardSection.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
          setTimeout(() => {
            this.setState({
              readyToGetPosts : true
            })
          }, 2000)
      }
    }

    render() {
        return (
          <section id="cards" ref={this.cardSection}>
            <div className="container">
                {
                  this.state.post ? <Post data={this.state.post} /> : <Skeleton />
                }
            </div>
          </section>
        )
    }
}