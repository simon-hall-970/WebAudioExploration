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
        if(this.props.kit == {}) {
            this.setState({disablePlay: false})
        } else {
            this.setState({disablePplay: true})
        }
    }

    state = {
        disablePlay: true,
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
            nextNoteTime = audioCtx.currentTime
            if(audioCtx.state === 'suspended'){
                audioCtx.resume()
                .then(() => this.schedulerInterval = setInterval(() => {
                    this.noteScheduler()}, schedulerInterval)
                )
            }
        }
    }

    nextNote () {
        let bpm = this.props.tempo
        //the next four variables are only looking at the first measure. Later iteration to follow the beat along the measures
        //and adjust their values according to the measure being played.  For now it's just to get things working.
        let subdivision = this.props.measures[0].subdivision 
        let beatValue = this.props.measures[0].beatValue
        let beatsPerMeasure = this.props.measures[0].beats  
        let totalNotes = (subdivision/beatValue) * beatsPerMeasure * 2 //2 measures hardcoded to start with

        //set length of note in seconds depending on bpm subdivision and beatValue
        const secondsPerNote = (60 / bpm) / (subdivision/beatValue)
        nextNoteTime += secondsPerNote  //update timing of next note event based on length of this note event
    
        //increment current note and loop after last note.
        currentNote++
        if(currentNote === totalNotes) {
            currentNote = 0
        }
    } 
    
    scheduleNotes() {
        let { kit, notes, tracks } = this.props         
        
        tracks.forEach(track => {
            let trackId = `track${track.Id}`
            let trackNotes = notes[trackId]
            let buffer = kit[trackId].buffer

            if(trackNotes[currentNote].checked === true ) {
                let sampleVolume = trackNotes[currentNote].velocity
                let trackVolume = track.Volume
                playSample(buffer, nextNoteTime, sampleVolume, trackVolume)
            }
        })
    }
    
    noteScheduler() {
        while(nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
            this.scheduleNotes()
            this.nextNote()
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
        tempo: reduxState.tempo,
        measures: reduxState.measures,
        kit: reduxState.kit,
        tracks: reduxState.tracks,
        notes: reduxState.notes
    }
}

export default connect(mapStateToProps)(PlayPause)