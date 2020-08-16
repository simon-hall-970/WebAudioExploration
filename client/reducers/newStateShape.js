//overal state object
state = {
    //master controls state
    master: {
        tempo: 120, //integer representing number of quarter note beats per minute
        volume: 50, //integer in range 0-100 for master volume
        pan: 0,
        subdivision,
    },

    //measures state
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

    //tracks state
    tracks: {
        track1:{
            name: 'trackname', //string
            filename: '../filelocation.wav', //string
            buffer: [anAudioBuffer], //audio sample decoded into an audio buffer array
            trackVolume: 50, //integer in range 0-100
            trackPan: 0, //integer in range from -x to +x read docs 
            mute: false, //boolean
            solo: false, //boolean
            noteSequencer: [
                {
                note: 1, //integer to order notes
                checked: false, //boolean
                velocity: 50, //integer in range 0-100
                },
                {
                note: 2, //integer to order notes
                checked: false, //boolean
                velocity: 50, //integer in range 0-100
                },
                {note: 3,
                ...etc},
            ]
        },
        track2:{...etc}
    },
}