import React from 'react'
import { masterGain } from '../../audioEngine/audio'

function MasterVolume () {

    const volumeHandler = (evt) => {
        let value = evt.target.value/100
        masterGain.gain.value = value
    }

    return (
        <div className="volume track-volume">
            <input id="trackVolume" type="range" max="100" min="0" step='1' onChange={volumeHandler} />
            <label htmlFor="trackVolume">Gain</label> 
        </div>
    )
}

export default MasterVolume