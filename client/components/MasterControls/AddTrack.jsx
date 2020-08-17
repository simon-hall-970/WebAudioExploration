import React from 'react'
import Tooltip from "@material-ui/core/Tooltip"
import { connect } from 'react-redux'
import { addNewTrack } from '../../actions/tracks'

class AddTrack extends React.Component{
    //adding new track.  Track state should hold relevant track info in track control settings, track type, audio buffer etc
    //need to redesign state structure and UI.
    addTrack = () => {
        let trackId = this.props.tracks.length+1
        let newTrack = {
            Id: trackId,
            Name: `Track ${trackId}`,
            Volume: 50,
            Pan: 0,
            Mute: false,
            Solo: false,
        }
        
        this.props.dispatch(addNewTrack(newTrack))
    }

    render(){
        return(
            <Tooltip
                title="Add a new track"
                placement="right"
            >
                <button className='btn' onClick={this.addTrack}>
                    +
                </button>
            </Tooltip>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        tracks: reduxState.tracks,
    }
}

export default connect(mapStateToProps)(AddTrack)