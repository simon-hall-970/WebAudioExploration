//create AudioContext with crossbrowser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext
export const audioCtx = new AudioContext()

//asynchronous function to load file into buffer
export function getFile(audioContext, filepath) {
    return fetch(filepath)
    .then(sampleFile => {
        console.log('from getFile function first: ',sampleFile)
        return sampleFile.arrayBuffer()})
    .then(arrayBuffer => {
        console.log('from getFile function second: ',arrayBuffer)
        return audioContext.decodeAudioData(arrayBuffer)})
    .then(audioBuffer => {
        console.log('from getFile function third: ',audioBuffer)
        return audioBuffer})
}

//prepare sample for single kit piece
export function setupSamplePiece(fileName) {
    const folder = './assets/samples/'
    let filePath = folder + fileName
    return getFile(audioCtx, filePath)
    .then (sample => {
        console.log('from setupSample function: ', sample)
        return sample})
}

//set up an entire kit of samples
//samplesObj {kitpiece1: 'filename1', kitpiece2: 'filename2'} etc
export function setupSampleKit(samplesObj) {
    console.log('setupSampleKit is being called')
    const folder = './assets/samples/'
    let kitObj = {}
    for (const kitpiece in samplesObj) {
        let filePath = folder + samplesObj[kitpiece]
        return getFile(audioCtx, filePath)
        .then (sample => {
            console.log('kitObj BEFORE piece being added: ', kitObj)
            kitObj[kitpiece] = sample
            return kitObj
        })
    }
    console.log('setupSampleKit kitObj to be returned:', kitObj)
    return kitObj
}


export function playSample(audioContext, audioBuffer) {
    const sampleSource = audioContext.createBufferSource()
    sampleSource.buffer = audioBuffer
    sampleSource.connect(audioContext.destination)
    sampleSource.start()
    return sampleSource
}