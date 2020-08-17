import React from 'react'
import { connect } from 'react-redux'
import { audioCtx, playSample } from '../../audioEngine/audio'

const schedulerInterval = 25  //milliseconds
const scheduleAheadTime = 0.1 //seconds

let currentNote = 0 //initiate current note
let nextNoteTime = audioCtx.currentTime //initiate next note time

class PlayPause extends React.Component {

    componentDidMount(){
        audioCtx.suspend()
    }

    state = {
        disablePlay: false,
        isPlaying: false
    }

    //start and stop playback on button press
    playPause = () => {
        //stop playing if already playing
        if(this.state.isPlaying == true){
            this.setState({
                isPlaying: false
            })
            audioCtx.suspend()
            clearInterval(this.schedulerInterval)
        } 
        //play if not currently playing
        else {
            this.setState({
                isPlaying: true
            })

            if(audioCtx.state === 'suspended'){
                audioCtx.resume()
                .then(() => this.schedulerInterval = setInterval(() => {
                    //define variables each time the scheduler is called to allow changes to take effect on the fly
                    let bpm = this.props.tempo
                    let notes = this.props.notes[this.state.track]
                    let buffer = this.props.kit[this.state.track]
                    //call scheduler and pass update variables
                    noteScheduler(bpm, notes, buffer)}, schedulerInterval)
                )
            }
        }
    }

    nextNote (bpm) {
        console.log(bpm, subdivision, beatValue)
        //set length of note in seconds depending on bpm subdivision and beatValue
        const secondsPerNote = (60 / bpm) / (subdivision/beatValue)
        nextNoteTime += secondsPerNote  //update timing of next note event based on length of this note event
    
        //increment current note and loop after last note.
        currentNote++
        if(currentNote === totalNotes) {
            currentNote = 0
        }
    } 
    
    scheduleNotes(noteSequencer, buffer, time) {
    
        if(noteSequencer[currentNote].checked === true ) {
            playSample(buffer, time)
        }
    }
    
    noteScheduler(bpm, noteSequencer, buffer) {
    
        while(nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
            this.scheduleNotes(noteSequencer, buffer, nextNoteTime)
            this.nextNote(bpm)
        }
    }
    

    render(){
        return(
        <button className = 'btn playPause' disabled={this.state.disablePlay} onClick={this.playPause}>
            {this.state.isPlaying ? '‖' : '►'}
        </button>)
    }
}

function mapStateToProps(reduxState) {
    return {
        bpm: reduxState.tempo,
        measures: reduxState.measures,
        kit: reduxState.kit,
        tracks: reduxState.tracks,
        notes: reduxState.notes
    }
}

export default connect(mapStateToProps)(PlayPause)