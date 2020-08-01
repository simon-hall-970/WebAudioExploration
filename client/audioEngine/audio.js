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

//set up our play sample to accept time parameter for scheduling playback with default playback at current time.
export function playSample(audioBuffer, time=audioCtx.currentTime) {
    console.log(time)
    const sampleSource = audioCtx.createBufferSource()
    sampleSource.buffer = audioBuffer
    sampleSource.connect(audioCtx.destination)
    sampleSource.start(time)
}