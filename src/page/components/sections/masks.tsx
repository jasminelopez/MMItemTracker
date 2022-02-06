import React from 'react'
import styled from 'styled-components'
import Item from '../item'
import maskAssets from './maskAssets'

function Masks() {
	return (
		<MaskSection>
			<header>This is the mask section</header>
			{maskAssets.map((item) => {
				return (
					<Item label={item.imageName} img={item.path} key={item.imageName} />
				)
			})}
		</MaskSection>
	)
}

export default Masks

const MaskSection = styled.div`
	display: flexbox;
	flex-wrap: wrap;
`
