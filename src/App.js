import React from 'react';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Nav />
			<Banner />
			<Row title='NETFLIX ORIGINALS' isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
			<Row title='Trending Now' isLargeRow={false} fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' isLargeRow={false} fetchUrl={requests.fetchTrending} />
			<Row title='Action Movies' isLargeRow={false} fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' isLargeRow={false} fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' isLargeRow={false} fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' isLargeRow={false} fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' isLargeRow={false} fetchUrl={requests.fetchDocumentariesMovies} />
		</div>
	);
}

export default App;
