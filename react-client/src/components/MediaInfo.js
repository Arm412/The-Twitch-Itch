import React, { useState, useEffect, useRef } from 'react';
import BasicBtn from './BasicBtn';

const MediaInfo = (props) => {
	// Update the duration to a string if necessary
	const getDurationString = (duration) => {
		if (typeof duration === 'string') {
			return duration;
		} else {
			let minutes = Math.floor(duration / 60) + 'm';
			let seconds = parseInt(duration % 60) + 's';
			return minutes + seconds;
		}
	};

	useEffect(() => {
		// Add flex class
		if (
			!document
				.getElementsByClassName('media-details')[0]
				.classList.contains('slide')
		) {
			document
				.getElementsByClassName('media-details')[0]
				.classList.add('slide');
		}
	}, []);

	return (
		<div className="flex-container media-details flex-animate-item">
			{props.media['thumbnail_url'] === '' ? (
				<div className="no-thumbnail"></div>
			) : (
				<div
					className={
						props.mediaType === 'videos' ? 'video-thumbnail' : 'clip-thumbnail'
					}
				>
					<img
						alt={props.media['thumbnail_url']}
						src={props.media['thumbnail_url']}
						className={
							props.mediaType === 'videos' ? 'vid-img-div' : 'clip-img-div'
						}
					></img>
				</div>
			)}

			<section className="info-desc-div">
				<div className="flex-container desc-height">
					<p className="header-color">Title: &nbsp; </p>
					<p className="desc-text">{props.media['title']}</p>
				</div>
				<div className="flex-container desc-height">
					{props.mediaType === 'videos' ? (
						<>
							<p className="header-color">Description: &nbsp; </p>
							<p className="desc-text">
								{props.media['description'] !== ''
									? props.media['description']
									: 'No description provided'}
							</p>
						</>
					) : (
						<>
							<p className="header-color">Clip ID: &nbsp; </p>
							<p className="desc-text">
								{props.media['id'] !== ''
									? props.media['id']
									: 'No ID provided'}
							</p>
						</>
					)}
				</div>
				<div className="flex-container">
					<p className="header-color">Twitch User: &nbsp; </p>
					<p className="center-text white">
						{props.mediaType === 'videos'
							? props.media['user_name']
							: props.media['broadcaster_name']}
					</p>
				</div>
				<div className="flex-container desc-height">
					<p className="header-color">Views: &nbsp; </p>
					<p className="center-text white">{props.media['view_count']}</p>
					<p className="header-color">&nbsp; Duration: &nbsp; </p>
					<p className="center-text white">
						{getDurationString(props.media['duration'])}
					</p>
				</div>

				<BasicBtn
					btnClass="info-link-div"
					btnText="View"
					onClick={() => {
						window.open(props.media['url'], '_blank');
					}}
				/>
			</section>
		</div>
	);
};

export default MediaInfo;
