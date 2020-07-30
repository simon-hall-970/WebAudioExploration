import React from 'react'
import { connect } from 'react-redux'

class TrackControls extends React.Component {
    basicKit = {
        open_hh: 'hh_op.wav',
        closed_hh: 'hh_cl.wav',
        snare: 'snare.wav',
        KickDrum: 'bass_drum.wav'
    }
    
    loadKit = (evt) => {
        let kitName = this[evt.target.value]
        let kitObj = audio.setupSampleKit(kitName)
        this.props.dispatch(newKit(kitObj))
    }

    loadSample = (evt) => {
        let drumPiece = evt.target.innerText
        let fileName = evt.nativeEvent.target.value
        return audio.setupSamplePiece(fileName)
        .then (sample => {
            console.log(sample)
            this.props.dispatch(addPiece(drumPiece, sample))
            return sample
        })
    }

    play = (evt) => {
        let context = audio.audioCtx
        let kitPiece = evt.target.value
        let buffer = this.props.kit[kitPiece]
        audio.playSample(context, buffer)
    }

    render() {
        return(
                <div className = 'btn_container'>
                    <button className = 'btn load' onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button className = 'btn play' onClick={this.play} value="snare" >Play</button>
                </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.Kit
    }
}

export default connect(mapStateToProps)(TrackControls)