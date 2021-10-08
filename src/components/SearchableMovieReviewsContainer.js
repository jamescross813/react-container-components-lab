import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '45ZtJt4uBi1DqHwwTGAuAo5AqtX3yMTr';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = ()=>{
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                reviews: data.results
            })
         })
    }

    handleChange = (event)=>{
        this.setState({
            searchTerm: event.target.value
        })
        
    }

    render(){
        return (
            <div className ="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={event=>this.handleChange(event)}/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer