import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
	label: string
}

const StyledButton = styled.button`
	font-size: 60px;
`

const Button = (props: ButtonProps) => {
	return <StyledButton>{props.label}</StyledButton>
}

export default Button
