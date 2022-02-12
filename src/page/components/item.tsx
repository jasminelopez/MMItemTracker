import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

//props should pass in a png image
//animated changes to toggle with left and right clicking maybe?

//TODO:
//Make an item that toggles AND incerements
//Make specific progession items that toggle between updgrades

type ItemProps = {
	label: string
	img?: any
}

function Item({ label, img }: ItemProps) {
	const [found, setFound] = useState(false)

	const toggleItem = () => {
		setFound(!found)
	}

	return (
		<ItemContainer found={found} onClick={toggleItem}>
			<img src={img} />
		</ItemContainer>
	)
}

export default Item

// const breatheAnimation = keyframes`
// 	0% { height: 100px; width: 100px; }
// 	30% { height: 400px; width: 400px; opacity: 1 }
// 	40% { height: 405px; width: 405px; opacity: 0.3; }
// 	100% { height: 100px; width: 100px; opacity: 0.6; }
// `
// animation-name: ${breatheAnimation};

interface itemContainerProps {
	found: boolean
}

const ItemContainer = styled.div<itemContainerProps>`
	display: flexbox;
	opacity: ${(p) => (p.found ? '100%' : '50%')};
`
