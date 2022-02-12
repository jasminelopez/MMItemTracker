import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import songAssets from './songAssets'

function Songs() {
	return (
		<SongSection>
			{songAssets.map((item) => {
				return (
					<Item label={item.imageName} img={item.path} key={item.imageName} />
				)
			})}
		</SongSection>
	)
}

export default Songs

const SongSection = styled.div`
	display: flexbox;
	flex-wrap: wrap;
	background-color: #b6b6b6;
	border-radius: 15px;
`
