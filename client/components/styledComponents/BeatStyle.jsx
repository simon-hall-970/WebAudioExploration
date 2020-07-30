import React from 'react'
import styled, { css } from 'styled-components'

const NoteStyle = styled.div`
    position: relative;
    display: inline-block;
    /* left: 50%;
    translate: -50%; */
    margin: 2px;
    height: 100px;
    width: 100px;
    background-color: rgb(200,200,200);
    text-align: center;
    line-height: 100px;
    font-size: 3em;
    font-weight: 900;
    color: white;
    ${({ checked }) => 
    checked && css`
    color: rgb(73, 0, 34);
    background: linear-gradient(0deg, rgb(17, 164, 184) ${props => props.velocity}%, #bbb ${props => props.velocity}%)
    `}
`

export default NoteStyle