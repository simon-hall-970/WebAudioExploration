import React from 'react'
import { connect } from 'react-redux'
import NoteStyle from '../styledComponents/BeatStyle'
import { updateNote, toggleNote } from '../../actions/noteControl'

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
            }, () => {this.props.dispatch(toggleNote(this.props.track, this.props.note, this.state.checked))}
            )          
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
        }, () => {this.props.dispatch(updateNote(this.props.track, this.props.note, this.state.velocity))}
        )
 
    }

    mouseUp = (evt) => {
        // let track = this.props.track
        // let note = this.props.note
        // let velocity = this.state.velocity
        // let checked = this.state.checked
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

function mapStateToProps(reduxState){
    return {
        notes: reduxState.noteSequencer
    }
}
export default connect(mapStateToProps)(NoteSelect)