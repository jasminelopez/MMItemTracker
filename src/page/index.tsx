import React from 'react'
import styled from 'styled-components'
import Masks from './components/sections/masks/masks'
import Quest from './components/sections/quest/quest'
import Songs from './components/sections/songs/songs'

function Tracker() {
	return (
		<TrackerContainer>
			<Masks />
			<Songs />
			<Quest />
		</TrackerContainer>
	)
}

export default Tracker

const TrackerContainer = styled.div`
	display: flexbox;
	background-color: #9932cc;
`
