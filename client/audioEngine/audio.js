//create AudioContext with crossbrowser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext
export const audioCtx = new AudioContext()

//asynchronous function to load file into buffer
export function getFile(audioContext, filepath) {
    return fetch(filepath)
    .then(sampleFile => {
        return sampleFile.arrayBuffer()})
    .then(arrayBuffer => {
        return audioContext.decodeAudioData(arrayBuffer)})
    .then(audioBuffer => {
        return audioBuffer})
}

//prepare sample for single kit piece
export function setupSamplePiece(fileName) {
    const folder = './assets/samples/'
    let filePath = folder + fileName
    return getFile(audioCtx, filePath)
    .then (sample => sample)
}

//set up an entire kit of samples
//samplesObj {kitpiece1: 'filename1', kitpiece2: 'filename2'} etc
export function setupSampleKit(samplesObj) {
    const folder = './assets/samples/'
    let kitObj = {}
    let names = []
    let promises = []
    for (const kitpiece in samplesObj) {
        let filePath = folder + samplesObj[kitpiece]
        names.push(kitpiece)
        promises.push(getFile(audioCtx, filePath))
    }
    Promise.all(promises)
    .then((buffers) => {
        buffers.forEach((buffer, index) => {
            kitObj[names[index]] = buffer
        })
        return kitObj
    })
    return kitObj
}

export function playSample(audioContext, audioBuffer) {
    const sampleSource = audioContext.createBufferSource()
    sampleSource.buffer = audioBuffer
    sampleSource.connect(audioContext.destination)
    sampleSource.start()
    return sampleSource
}

/*SCHEDULER*/

/* Timing configuration */
const lookAhead = 25.0 //milliseconds
const scheduleAheadtime = 0.1 //seconds

/* Initialize timing variables */
let currentNote = 0 
let nextNoteTime = 0.0 

//function that tracks note count and time of next note
function nextNote(tempo, division, beatVal, measures) {
    const secondsPerBeat = 60.0 / tempo 
    const secondsPerDivision = secondsPerBeat / (division / beatVal)
    const totalNotes = measures * division

    nextNoteTime += secondsPerDivision //Add division length to current note time
    currentNote++ //Advance current Note
    if (currentNote === totalNotes) {
        currentNote = 0
    }
}

const notesInQueue = []

function scheduleNotes(beatNumber, time, tracks) {
    notesInQueue.push({note: beatNumber, time: time})
    tracks.forEach(track => {
        let buffer;
        if (track[currentNote].checked) {
            playSample(audioCtx, buffer)
        }
    })
}

export function noteScheduler(tempo, division, beatVal, measures, tracks) {
    while(nextNoteTime < (audioCtx.currentTime + scheduleAheadtime)) {
        scheduleNotes(currentNote, nextNoteTime, tracks)
        nextNote(tempo, division, beatVal, measures)
    }
    timerId = setTimehout(noteScheduler, lookAhead)
}

