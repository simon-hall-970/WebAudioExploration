import React from 'react'
import Tooltip from "@material-ui/core/Tooltip"
import { connect } from 'react-redux'
import { addNewTrack } from '../../actions/tracks'

class AddTrack extends React.Component{
    //adding new track.  Track state should hold relevant track info in track control settings, track type, audio buffer etc
    //need to redesign state structure and UI.
    addTrack = () => {
        console.log("addTrack button clicked and successfully called addTrack function")
        this.props.dispatch(addNewTrack())
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
        kit: reduxState.Kit
    }
}

export default connect(mapStateToProps)(AddTrack)