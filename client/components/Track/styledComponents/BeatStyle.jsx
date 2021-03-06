import React from 'react'
import styled, { css } from 'styled-components'

// let noteWidth = (window.innerWidth * 0.78) / 16

const NoteStyle = styled.div`
    position: relative;
    display: inline-block;
    /* left: 50%;
    translate: -50%; */
    margin: 0 2px;
    height: 50px;
    flex-grow: 1;
    flex-shrink: 0;
    background-color: white;
    text-align: center;
    line-height: 120px;
    font-size: 100%;
    font-weight: 900;
    color: rgb(215,215,215);
    ${({ checked }) => 
    checked && css`
    color: rgb(73, 0, 34);
    background: linear-gradient(0deg, rgb(17, 164, 184) ${props => props.velocity}%, #bbb ${props => props.velocity}%)
    `}
`

export default NoteStyle