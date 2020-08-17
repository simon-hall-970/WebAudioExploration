import React from 'react'
import { connect } from 'react-redux'
import { audioCtx, setupSamplePiece, playSample } from '../../audioEngine/audio'
import { noteScheduler } from '../../audioEngine/scheduler'
import { addPiece }  from '../../actions/kit'

class TrackControls extends React.Component {

    componentDidMount(){
        audioCtx.suspend()
    }

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
    test = () => {
        let buffer = this.props.kit[this.state.track]
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
        return(
                <div className = 'btn_container'>
                    <button className = 'btn load' onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button className = 'btn play' onClick={this.test} value="snare" >Test</button>
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