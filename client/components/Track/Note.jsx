import React from 'react'
import NoteStyle from '../styledComponents/BeatStyle'

/*Note selector will need to control: 
    -true false state of each Note (whether it should be scheduled to be played or not)
    -volume / velocity of each Note
    -length? */

class NoteSelect extends React.Component {

    state ={
        checked: false,
        rightBtnDown: false,
        startPosY: 0,
        startVel: 100,
        velocity: 100
    }

    mouseDown = (evt) => {
        const e = evt.nativeEvent
        let checkedState = this.state.checked

        if (e.button === 0) {
            this.setState({
                checked: !checkedState
            })
        }
        if (e.button === 2 && checkedState) {
            this.setState({
                rightBtnDown: true,
                startPosY: e.y,
                startVel: this.state.velocity
            }, () => {if (this.state.rightBtnDown) {
                window.addEventListener("mousemove", this.velocity)
                window.addEventListener("mouseup", this.mouseUp)

                }
            })
        }
        
    }

    velocity = (evt) => {

        let initialPos = this.state.startPosY
        let velChange = initialPos - evt.y
        let startVel = this.state.startVel
        let finalVel = () => {
            if (startVel + velChange < 0) {return 0}
            else if (startVel + velChange > 100) {return 100}
            else {return Math.floor(startVel + velChange)}
        }
        let vel = finalVel()
        this.setState({
            velocity: vel           
        })
    }

    mouseUp = (evt) => {
        window.removeEventListener("mousemove", this.velocity)
        if (evt.button === 2) {
            this.setState({
                rightBtnDown: false,
            })
        }
    }
    render(){
        return(
            <NoteStyle 
                onMouseDown = {this.mouseDown}
                onContextMenu = {e => e.preventDefault()}
                velocity = {this.state.velocity}
                checked = {this.state.checked}
            > {this.state.checked ? this.state.velocity : 0}
            </NoteStyle>

        )
    }
}

export default NoteSelect