import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '45ZtJt4uBi1DqHwwTGAuAo5AqtX3yMTr';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    fetchReviews = ()=>{
        fetch(URL)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                reviews: data.results
            })
         })
    }

    componentDidMount(){
      this.fetchReviews()
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                {/* <button onClick={this.fetchReviews}>Get movie reviews from NYTimes!</button> */}
				<MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer