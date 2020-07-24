import React from 'react'
import { connect } from 'react-redux'
import * as audio from '../audioEngine/audio.js'
import { addPiece, newKit } from '../actions/drumkit.js'


class TestInterface extends React.Component{
    
    basicKit = {
        highhat: 'closed_high_hat.wav',
        snare: 'snare.wav',
        bass: 'bass_drum.wav'
    }
    
    loadKit = (evt) => {
        let kitName = this[evt.target.value]
        console.log(kitName)
        return audio.setupSampleKit(kitName)
        .then(kit => {
            console.log('kit being dispatched to action: ',kit)
            this.props.dispatch(newKit(kit))
            return kit
        })
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
    render(){
        return (
            <>
                <div>
                    <button onClick={this.loadKit} value='basicKit'>Load Basic Kit</button>
                </div>

                <div>
                    <button onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button onClick={this.play} value="snare" >Play</button>
                </div>

                <div>
                    <button onClick={this.loadSample} value='bass_drum.wav'>bassdrum</button>
                    <button onClick={this.play} value="bassdrum">Play</button>
                </div>

                <div>
                    <button onClick={this.loadSample} value='closed_high_hat.wav'>highhat</button>
                    <button onClick={this.play} value="highhat">Play</button>
                </div>

                <div>
                    <button onClick={this.loadSample} value='ride_cymbal.wav'>ride</button>
                    <button onClick={this.play} value="ride">Play</button>
                </div>
                <div>
                    <button onClick={this.loadSample} value='crash_cymbal.wav'>crash</button>
                    <button onClick={this.play} value="crash">Play</button>
                </div>
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.Kit
    }
}

export default connect(mapStateToProps)(TestInterface)