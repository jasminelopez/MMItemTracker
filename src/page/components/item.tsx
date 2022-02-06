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
		<ItemContainer onClick={toggleItem}>
			<img src={img} />
		</ItemContainer>
	)
}

export default Item

const breatheAnimation = keyframes`
	0% { height: 100px; width: 100px; }
	30% { height: 400px; width: 400px; opacity: 1 }
	40% { height: 405px; width: 405px; opacity: 0.3; }
	100% { height: 100px; width: 100px; opacity: 0.6; }
`
interface itemContainerProps {
	active: boolean
}

const ItemContainer = styled.div`
	display: flexbox;

	animation-name: ${breatheAnimation};
	animation-duration: 8s;
`

// breath-animation {
// 	0% { height: 100px; width: 100px; }
// 	30% { height: 400px; width: 400px; opacity: 1 }
// 	40% { height: 405px; width: 405px; opacity: 0.3; }
// 	100% { height: 100px; width: 100px; opacity: 0.6; }
//    }

// 0% {transform: rotate(10deg);}
// 25% {transform: rotate(-10deg);}
// 50% {transform: rotate(20deg);}
// 75% {transform: rotate(-5deg);}
// 100% {transform: rotate(0deg);}
