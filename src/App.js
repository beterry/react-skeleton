import React from 'react';

import './App.css';

import Card from './components/Card';
import Skeleton from './components/Skeleton';

//to format current Date
import moment from 'moment'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shows: null, genres: null, currentDate: ''};
    }

    //executes once after page load
    componentDidMount() {

        //get current date, format it, and update state
        let currentDate = new Date();
        const dateString = moment(currentDate).format("MMMM DD, YYYY");
        this.setState({currentDate: dateString});

        //manual 5 sec delay to see skeleton components
        //get shows and genres and update state
        setTimeout(async () => {
            const showResponse = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=32e2293c913c59efce4695064290d9fb');
            const genreResponse = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=32e2293c913c59efce4695064290d9fb&language=en-US');
            const shows = await showResponse.json();
            const genres = await genreResponse.json();
            this.setState({shows: shows.results, genres: genres.genres});
        }, 5000)
    }

    // returns a string of all the show genres
    getGenreString(genres){
        let firstGenre = this.state.genres.find(genre => genre.id === genres[0]);
        let genreString = firstGenre.name

        // create comma between each additional genre
        for (let i = 1; i < genres.length; i++){
            let nextGenre = this.state.genres.find(genre => genre.id === genres[i]);
            genreString += `, ${nextGenre.name}`;
        }

        return genreString;
    }

    render() {

        return (
            <> 
                <header>
                    <h1>Trending TV Shows</h1>
                    <p>{this.state.currentDate}</p>
                </header>
                <main>
                    {this.state.shows && this.state.shows.map((show, index) => 
                        <Card
                            key={show.id}
                            title={show.name}
                            poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                            overview={show.overview}
                            year={new Date(show.first_air_date).getFullYear()}
                            genres={this.getGenreString(show.genre_ids)}
                        />
                    )}
                    {!this.state.shows && [1, 2, 3, 4, 5].map(num => <Skeleton key={num}/>)}
                </main>
            </>
        );
    }
    
}

export default App;
