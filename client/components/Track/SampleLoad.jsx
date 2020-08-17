import React from 'react'
import { connect } from 'react-redux'
import { setupSamplePiece } from '../../audioEngine/audio'
import { addPiece }  from '../../actions/kit'


class SampleLoad extends React.Component {

    state = {
        showMenu: false,
    }
    
    displayMenu = () => {
        let currentMenu = this.state.showMenu
        this.setState({showMenu: !currentMenu})
    }

    loadSample = (evt) => {
        let fileName = evt.nativeEvent.target.value
        return setupSamplePiece(fileName)
        .then (sample => {
            this.props.dispatch(addPiece(this.props.track, sample))
            this.setState({showMenu: false})
            return sample
        })
    }

    render(){
        return(
            <div>
                <button className = 'btn load'  onClick={this.displayMenu} >{`Select sample ${this.state.showMenu ? '-' : '+'}`}</button>

                {this.state.showMenu ? (
                    <div className = "sampleMenu">
                        <button className = 'load' onClick={this.loadSample} value='crash_cymbal.wav'>crash</button>
                        <button className = 'load' onClick={this.loadSample} value='ride_cymbal.wav'>ride</button>
                        <button className = 'load' onClick={this.loadSample} value='hh_op.wav'>open hh</button>
                        <button className = 'load' onClick={this.loadSample} value='hh_cl.wav'>closed hh</button>
                        <button className = 'load' onClick={this.loadSample} value='snare.wav'>snare</button>
                        <button className = 'load' onClick={this.loadSample} value='KickDrum.wav'>kick</button>
                    </div>
                ) : null}
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.kit,
    }
}

export default connect(mapStateToProps)(SampleLoad)