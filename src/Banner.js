import React, { useEffect, useState } from 'react';
import requests from './request';
import axios from './axios';
import './Banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
	const [ movie, setMovie ] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			const index = Math.floor(Math.random() * request.data.results.length);
			setMovie(request.data.results[index]);
		}
		fetchData();
	}, []);
	let style = {};

	if (movie) {
		style = {
			backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),#111),url(${baseUrl}${movie.backdrop_path})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center top'
		};
	}

	const showDescription = (str, n) => {
		if (str && str.length < n) {
			return str;
		} else if (str && str.length >= n) {
			return str.substr(0, n - 1) + '...';
		}
		return;
	};

	return (
		<header style={style} className='banner'>
			<div className='banner__contents'>
				<h1 className='banner__title'>
					{movie.title ? movie.title : movie.name ? movie.name : movie.original_name}
				</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>{showDescription(movie.overview, 150)}</h1>
			</div>
		</header>
	);
};

export default Banner;
