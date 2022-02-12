import React from 'react'
import styled from 'styled-components'
import Masks from './components/sections/masks/masks'
import Songs from './components/sections/songs/songs'

function Tracker() {
	return (
		<TrackerContainer>
			<Masks />
			<Songs />
		</TrackerContainer>
	)
}

export default Tracker

const TrackerContainer = styled.div`
	display: flexbox;
	background-color: #9932cc;
`
