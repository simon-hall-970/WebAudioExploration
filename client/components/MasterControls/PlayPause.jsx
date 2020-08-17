import React from 'react'
import { connect } from 'react-redux'
import { audioCtx } from '../../audioEngine/audio'
import { noteScheduler } from '../../audioEngine/scheduler'

class PlayPause extends React.Component {

    componentDidMount(){
        audioCtx.suspend()
    }

    state = {
        play: false,
        track: `track${this.props.track}`, //props.track will not be updated so okay to be used in state
        isPlaying: false
    }
    //the following needs to move to master control use a solo and/or mute button for listening to individual tracks.
    schedulerInterval

    playPause = () => {

        if(this.state.isPlaying == true){
            this.setState({
                isPlaying: false
            })
            audioCtx.suspend()
            clearInterval(this.schedulerInterval)
        } 
        else {
            this.setState({
                isPlaying: true
            })

            if(audioCtx.state === 'suspended'){
                audioCtx.resume()
                .then(() => this.schedulerInterval = setInterval(() => {
                    //define variables each time the scheduler is called to allow on the fly changes
                    let bpm = this.props.tempo
                    let noteSequencer = this.props.notes[this.state.track]
                    let buffer = this.props.kit[this.state.track]
                    //call scheduler and pass update variables
                    noteScheduler(bpm, noteSequencer, buffer)}, 25)
                )
            }
        }
    }
    render(){
        return(
        <button className = 'btn playPause' disabled={this.state.play} onClick={this.playPause}>
            {this.state.isPlaying ? '‖' : '►'}
        </button>)
    }
}

export default PlayPause