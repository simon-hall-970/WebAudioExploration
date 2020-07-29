import React from 'react'
import { connect } from 'react-redux'
import { updateTempo } from '../actions/masterControls'

class TempoController extends React.Component {

    changeTempo = (evt) => {
        this.props.dispatch(updateTempo(evt.target.value))
    }

    render() {
        return(
            <>
                <label className = 'tempo' htmlFor="tempo"><span id="bpmVal">{this.props.tempo}</span> Beats per Minute (BPM)</label>
                <input name="tempo" 
                    type="range" 
                    min="60" 
                    max="180" 
                    value={this.props.tempo} 
                    step="1"
                    onChange={this.changeTempo} />              
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        tempo: globalState.tempo
    }
}

export default connect(mapStateToProps)(TempoController)