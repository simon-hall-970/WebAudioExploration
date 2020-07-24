import React from 'react'
import * as audio from '../audioEngine/audio.js'
import { loadOptions } from '@babel/core'

class TestInterface extends React.Component{
    state={}


    loadSample = (evt) => {
        let fileName = evt.nativeEvent.target.value
        let sample = audio.setupSample(fileName)
        this.setState({
            ...this.state,
            [evt.target.innerText]: sample
        })
        console.log('loadSample function state: ',this.state)
        console.log('loadSample function sample: ',sample)
    }

    play = (evt) => {
        let context = audio.audioCtx
        let kitPiece = evt.target.value
        let buffer = this.state[kitPiece]
        audio.playSample(context, buffer)
    }
    render(){
        return (
            <>
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

export default TestInterface