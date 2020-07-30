import React from 'react'
import Tooltip from "@material-ui/core/Tooltip"
import { connect } from 'react-redux'

class AddTrack extends React.Component{

    addTrack = () => {
        console.log("addTrack button clicked and successfully called addTrack function")
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

export default AddTrack