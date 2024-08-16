import React from "react";
import Post from "./Post";
import Skeleton from "./Skeleton";

export default class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          readyToGetPosts : false,
          post : null,
          translate : 0,
          currentPost : 0
        }

        this.cardSection = React.createRef();
        this.baseUrl = "https://gist.githubusercontent.com/alinabizadeh1913/2c47e37743ffde5f8f70a70a4e27edc4/raw/c1d7d68171f562da563b71c1e8c5c6f74f390382/db.json";
        this.current = 0;
    }

    componentDidMount() {
      window.addEventListener('scroll',this.handleScroll.bind(this));
    }

    componentDidUpdate(prevProps,prevState){
      if(prevState.readyToGetPosts !== this.state.readyToGetPosts) {
        fetch(this.baseUrl).then(response => response.json()).then(result => {
          this.setState({
            post : result.Posts
          })
        }).catch(e => console.log(e))
      }
    }

    handleRightIconClick() {
      if (this.state.post !== null) {
        if (this.current < this.state.post.length - 1) {
          this.current = this.current + 1;
        }
      }
      this.setState({
        translate : `-${this.current * 100}`
      })
    }

    handleLeftIconClick() {
      if (this.current > 0) {
        this.current = this.current - 1;
        this.setState(state => {
          return {
            translate : Number(state.translate) + 100
          }
        })
      }
    }

    handleScroll(){
      const rect = this.cardSection.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
          setTimeout(() => {
            this.setState({
              readyToGetPosts : true
            })
          }, 1400)
      }
    }

    render() {
        return (
          <section id="cards" ref={this.cardSection}>
            <div className="container position-relative overflow-hidden">
                {
                  this.state.post ? <Post data={this.state.post} translate={this.state.translate} /> : <Skeleton />
                }
                <div className="arrow-wrapper d-flex d-md-none">
                  <div className="icon">
                    <i class="fa-solid fa-angle-left" onClick={this.handleLeftIconClick.bind(this)}></i>
                  </div>
                  <div className="icon">
                    <i class="fa-solid fa-angle-right" onClick={this.handleRightIconClick.bind(this)}></i>
                  </div>
                </div>
            </div>
          </section>
        )
    }
}