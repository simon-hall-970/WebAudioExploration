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
        let sampleName = evt.nativeEvent.target.name
        return setupSamplePiece(fileName)
        .then (sample => {
            this.props.dispatch(addPiece(this.props.track, sample, sampleName))
            this.setState({showMenu: false})
            return sample
        })
    }

    render(){
        return(
            <>
                <button className = 'load'  onClick={this.displayMenu} >{`Select sample ${this.state.showMenu ? '-' : '+'}`}</button>

                {this.state.showMenu ? (
                    <div className = "sampleMenu">
                        <button className = 'load' onClick={this.loadSample} name='crash' value='crash_cymbal.wav'>crash</button>
                        <button className = 'load' onClick={this.loadSample} name='ride' value='ride_cymbal.wav'>ride</button>
                        <button className = 'load' onClick={this.loadSample} name='open high hat' value='hh_op.wav'>open hh</button>
                        <button className = 'load' onClick={this.loadSample} name='closed high hat' value='hh_cl.wav'>closed hh</button>
                        <button className = 'load' onClick={this.loadSample} name='snare' value='snare.wav'>snare</button>
                        <button className = 'load' onClick={this.loadSample} name='kick' value='KickDrum.wav'>kick</button>
                    </div>
                ) : null}
            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        kit: reduxState.kit,
    }
}

export default connect(mapStateToProps)(SampleLoad)