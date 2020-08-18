import React from 'react'
import { connect } from 'react-redux'
import { addPiece, newKit } from '../actions/kit'

import * as audio from '../audioEngine/audio'

import TempoCtrl from './MasterControls/TempoCtrl'
import TrackContainer from './Track/TrackContainer'
import AddTrack from './MasterControls/AddTrack'
import PlayPause from './MasterControls/PlayPause'
import MasterVolume from './MasterControls/MasterVolume'


class TestInterface extends React.Component{
    //threw together a quick interface to provide an interface for debugging during development.
    //will keep most of the code but it will likely live in different modules as the UI evolves.
    basicKit = {
        open_hh: 'hh_op.wav',
        closed_hh: 'hh_cl.wav',
        snare: 'snare.wav',
        KickDrum: 'KickDrum.wav'
    }
    
    loadKit = (evt) => {
        let kitName = this[evt.target.value]
        let kitObj = audio.setupSampleKit(kitName)
        this.props.dispatch(newKit(kitObj))
    }

    play = (evt) => {
        let kitPiece = evt.target.value
        let buffer = this.props.kit[kitPiece]
        audio.playSample(buffer)
    }

    loadTracks = () => {
        let tracks = this.props.tracks
        return tracks.map(track => <TrackContainer key={track.Id} track={track.Id}/>)
    }

    render(){
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
                <MasterVolume />
                <PlayPause />

                {this.loadTracks()}

                <AddTrack/>
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.kit,
        tracks: reduxState.tracks
    }
}

export default connect(mapStateToProps)(TestInterface)