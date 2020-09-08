import React from 'react'
import { masterGain } from '../../audioEngine/audio'

function MasterVolume () {

    const volumeHandler = (evt) => {
        let value = parseInt(evt.target.value, 10)
        masterGain.gain.value = value/100
        console.log(masterGain.gain.value)
    }

    return (
        <div className="volume track-volume">
            <input id="trackVolume" type="range" max="100" min="0" step='1' onChange={volumeHandler} />
            <label htmlFor="trackVolume">Master Gain</label> 
        </div>
    )
}

export default MasterVolume