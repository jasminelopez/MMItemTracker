import React from 'react'
import styled from 'styled-components'
import Item from '../../item'
import maskAssets from './maskAssets'

function Masks() {
	return (
		<MaskSection>
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
	background-color: #b6b6b6;
	border-radius: 15px;
`
