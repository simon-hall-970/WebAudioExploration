import React from 'react'
import BeatStyle from '../styledComponents/BeatStyle'

/*Beat selector will need to control: 
    -true false state of each beat (whether it should be scheduled to be played or not)
    -volume / velocity of each beat
    -length? */

class BeatSelect extends React.Component {

    
    render(){
        return(
            <BeatStyle />
        )
    }
}

export default BeatSelect