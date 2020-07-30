import React from 'react'
import { connect } from 'react-redux'
import { addPiece, newKit } from '../actions/drumkit'

import * as audio from '../audioEngine/audio'

import TempoCtrl from './MasterControls/TempoCtrl'
import TrackContainer from './Track/TrackContainer'
import AddTrack from './MasterControls/AddTrack'


class TestInterface extends React.Component{
    
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

    render(){
        let track = 1
      return (
          <>    
                <div className = 'container'>
                    <TempoCtrl />
                </div>
                <div className = 'container'> Load multiple samples (Basic Kit = HH, Snare, Kick)
                    <div className = 'btn_container'>
                        <button className = 'btn' onClick={this.loadKit} value='basicKit'>Load Basic Kit</button>
                    </div>
                </div>

                <TrackContainer Key={track} track = {track}/>

                <div className = 'container'>Load sample
                    <div className = 'btn_container'>
                        <button className = 'btn load' onClick={this.loadSample} value='KickDrum.wav'>Kick</button>
                        <button className = 'btn play' onClick={this.play} value="Kick">Play</button>
                    </div>
                </div>

                <div className = 'container'>Load sample
                    <div className = 'btn_container'>
                        <button className = 'btn load' onClick={this.loadSample} value='hh_cl.wav'>closed_hh</button>
                        <button className = 'btn play' onClick={this.play} value="closed_hh">Play</button>
                    </div>
                </div>

                <div className = 'container'>Load sample
                    <div className = 'btn_container'>
                        <button className = 'btn load' onClick={this.loadSample} value='hh_op.wav'>open_hh</button>
                        <button className = 'btn play' onClick={this.play} value="open_hh">Play</button>
                    </div>
                </div>

                <div className = 'container'>Load sample
                    <div className = 'btn_container'>
                        <button className = 'btn load' onClick={this.loadSample} value='ride_cymbal.wav'>ride</button>
                        <button className = 'btn play' onClick={this.play} value="ride">Play</button>
                    </div>
                </div>
                
                <div className = 'container'>Load sample
                    <div className = 'btn_container'>
                        <button className = 'btn load' onClick={this.loadSample} value='crash_cymbal.wav'>crash</button>
                        <button className = 'btn play' onClick={this.play} value="crash">Play</button>
                    </div>
                </div>
                <AddTrack/>
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