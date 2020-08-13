import React from 'react'
import { connect } from 'react-redux'
import { audioCtx, setupSamplePiece, playSample } from '../../audioEngine/audio'
import { noteScheduler } from '../../audioEngine/scheduler'
import { addPiece }  from '../../actions/drumkit'

class TrackControls extends React.Component {

    state = {
        play: true,
        track: `track${this.props.track}`, //props.track will not be updated so okay to be used in state
        isPlaying: false
    }
    
    loadSample = (evt) => {
        let fileName = evt.nativeEvent.target.value
        return setupSamplePiece(fileName)
        .then (sample => {
            console.log(sample)
            this.props.dispatch(addPiece(this.state.track, sample))
            this.setState({play: false})
            return sample
        })
    }

    //play function plays sound source once to check the sound state.
    play = () => {
        let buffer = this.props.kit[this.state.track]
        if(audioCtx.state === 'suspended') {
            audioCtx.resume()
            .then(playSample(buffer))
        }
        else {
            playSample(buffer)
        }
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
            }

            this.schedulerInterval = setInterval(() => {
                let bpm = this.props.tempo
                let noteSequencer = this.props.notes
                let buffer = this.props.kit[this.state.track]
            noteScheduler(bpm, noteSequencer, buffer)}, 25)
        }
    }

    render() {

        return(
                <div className = 'btn_container'>
                    <button className = 'btn load' onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button className = 'btn play' onClick={this.play} value="snare" >Test</button>
                    <button className = 'btn playPause' disabled={this.state.play} onClick={this.playPause}>
                    {this.state.isPlaying ? '‖' : '►'}
                    </button>
                </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.Kit,
        measure: reduxState.measures,
        notes: reduxState.noteSequencer,
        tempo: reduxState.tempo
    }
}

export default connect(mapStateToProps)(TrackControls)