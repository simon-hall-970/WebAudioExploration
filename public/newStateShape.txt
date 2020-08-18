//overal state object
state = {
    //master controls state
    master: {
        tempo: 120, //integer representing number of quarter note beats per minute
        volume: 50, //integer in range 0-100 for master volume
        pan: 0,
        subdivision: 8 //eight notes
    },

    //measures state - applies globally to all tracks
    measures: {
        measure1: {
            beatsPerMeasure: 4, //counts per measure 
            beatsValue: 4, //value that gets the count
        },
        measure2: {            
            beatsPerMeasure: 4, //counts per measure 
            beatsValue: 4, //value that gets the count
        },
        measure3: {
            ...etc
        }
    },

    //--TRACK SPECIFIC STATE SLICES-- 

    //tracks controls
    tracks: {
        track1: {
            name: 'trackname', //string
            trackVolume: 50, //integer in range 0-100
            trackPan: 0, //integer in range from -x to +x read docs 
            mute: false, //boolean
            solo: false, //boolean
        },
        track2: { //defaults when track is created
            name: 'trackname', //string
            trackVolume: 50, //integer in range 0-100
            trackPan: 0, //integer in range from -x to +x read docs 
            mute: false, //boolean
            solo: false, //boolean
        },
    },

    //kit information - sound source for each track.
    kit: {
        track1: {
            filename: 'filename.wav',  //store file location
            filesource: ['AudioBuffer'] //downloaded decoded audio buffer ready to play
        },
        track2: {...etc}
    },

    //notes info stored by track
    notes: {
        track1: [{
                note: 1,
                checked: false, //boolean true or false
                velocity: 50 //integer range 0-100 default 50
            },
            {
                note: 1,
                checked: false, //boolean true or false
                velocity: 50 //integer range 0-100 default 50
            },
            { ...etc }
        ],
        track2: [{
                note: 1,
                checked: false, //boolean true or false
                velocity: 50 //integer range 0-100 default 50
            },
            {
                note: 1,
                checked: false, //boolean true or false
                velocity: 50 //integer range 0-100 default 50
            },
            { ...etc }
        ],
        track3: [...etc]
    }
}