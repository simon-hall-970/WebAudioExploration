import React from 'react'
import { audioCtx } from '../audioEngine/audio'

class AudioContextWatcher extends React.Component {
    
    componentDidMount() {
        this.ClockWatcher()
        this.StateWatcher()
    }

    state ={
        audioTimer: 0,
        audioState: ''
    }
    ClockWatcher = () => {
        let clockInterval = setInterval(() => {
            this.setState({
                audioTimer: audioCtx.currentTime.toFixed(1)
            })
        }, 100)
    }

    StateWatcher = () => {
        let stateInterval = setInterval(() => {
            this.setState({
                audioState: audioCtx.state
            })
        }, 500)
    }

    render() {
        return (
            <>
                <div>
                    AudioContext time is <span className='audio-state'>{this.state.audioTimer}</span>
                </div>
                <div>
        AudioContext State = <span className='audio-state'>{this.state.audioState}</span>
                </div>
            </>
        )
    }
}

export default AudioContextWatcher