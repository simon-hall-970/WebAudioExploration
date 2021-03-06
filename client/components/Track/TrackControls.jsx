import React from 'react'
import { connect } from 'react-redux'
import { audioCtx, playSample } from '../../audioEngine/audio'
import SampleLoad from './SampleLoad'
import TrackVolume from './TrackVolume'

class TrackControls extends React.Component {

    componentDidMount(){
    }

    state = {
        play: true,
        track: `track${this.props.track}`, //props.track will not be updated so okay to be used in state
        isPlaying: false
    }

    //play function plays sound source once to check the sound state.
    test = () => {            
            let buffer = this.props.kit[this.state.track].buffer
            if(audioCtx.state === 'suspended') {
                audioCtx.resume()
                .then(playSample(buffer))
                .then(audioCtx.suspend())
            }
            else {
                playSample(buffer)
            }
    }

    render() {
        let kitLength = Object.keys(this.props.kit).length
        return(
                <div className = 'track-controls' >
                    
                    <TrackVolume track={this.props.track}/>
                    <div className = "track-face" onClick={kitLength === 0 ? null : this.test} >
                        <SampleLoad track = {this.state.track} />
                    </div>
                </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.kit,
        measure: reduxState.measures,
        notes: reduxState.notes,
        tempo: reduxState.tempo
    }
}

export default connect(mapStateToProps)(TrackControls)