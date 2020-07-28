import React from 'react'
import { connect } from 'react-redux'
import * as audio from '../audioEngine/audio.js'
import { addPiece, newKit } from '../actions/drumkit.js'


class TestInterface extends React.Component{
    
    basicKit = {
        highhat: 'closed_high_hat.wav',
        snare: 'snare.wav',
        bassdrum: 'bass_drum.wav'
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
    render(){
        return (
            <>
                <div className = 'container'> Load full kit
                <div>
                    <button className = 'btn' onClick={this.loadKit} value='basicKit'>Load Basic Kit</button>
                </div>
                </div>
                <div className = 'container'>Load sample
                <div>
                    <button className = 'btn load' onClick={this.loadSample} value='snare.wav'>snare</button>
                    <button className = 'btn play' onClick={this.play} value="snare" >Play</button>
                </div></div>

                <div className = 'container'>Load sample
                <div>
                    <button className = 'btn load' onClick={this.loadSample} value='bass_drum.wav'>bassdrum</button>
                    <button className = 'btn play' onClick={this.play} value="bassdrum">Play</button>
                </div></div>

                <div className = 'container'>Load sample
                <div>
                    <button className = 'btn load' onClick={this.loadSample} value='closed_high_hat.wav'>highhat</button>
                    <button className = 'btn play' onClick={this.play} value="highhat">Play</button>
                </div></div>

                <div className = 'container'>Load sample
                <div>
                    <button className = 'btn load' onClick={this.loadSample} value='ride_cymbal.wav'>ride</button>
                    <button className = 'btn play' onClick={this.play} value="ride">Play</button>
                </div></div>
                <div className = 'container'>Load sample
                <div>
                    <button className = 'btn load' onClick={this.loadSample} value='crash_cymbal.wav'>crash</button>
                    <button className = 'btn play' onClick={this.play} value="crash">Play</button>
                </div></div>
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