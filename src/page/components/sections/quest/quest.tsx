import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import questAssets from './questAssets'

function Quest() {
	return (
		<QuestSection>
			{questAssets.map((item) => {
				return (
					<Item label={item.imageName} img={item.path} key={item.imageName} />
				)
			})}
		</QuestSection>
	)
}

export default Quest

const QuestSection = styled.div`
	display: flexbox;
	flex-wrap: wrap;
	background-color: #b6b6b6;
	border-radius: 15px;
`
