import React from "react";

function Tracks(props) {
	return (
		<section className="tracks">
			<div className="search-tracks">
				Look for good music? Explore our top 100!
				<button onClick={props.onGetTopTracks}>Get it!</button>
			</div>
			{props.isFetching ?
			<div className="loading">Loading...</div> :
			!props.hasError ?
			<div className="tracks-list"> {props.tracks.map((item, i) => {
				return (
					<div className="track" key={i}>
						<div className="track-img">
							<img src={item.artworkUrl100}/>
						</div>
						<div className="track-info">
							<div className="title">{i + 1}. {item.collectionName}</div>
							<div className="performer">{item.artistName}</div>
							<ul className="tags">
								{item.genres.map((genre, i) => <li key={i} className="tag">{genre.name}</li>)}
							</ul>
						</div>
					</div>
				)})}
			</div> :
			<div className="error">Sorry, error occured. Please, try again later</div>			
			}
		</section>
	)	
}

export default Tracks;