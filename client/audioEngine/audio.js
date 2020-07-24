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

//take the file name as a string and call get file with audio Context to prepare sample
export function setupSample(fileName) {
    const folder = './assets/samples/'
    let filePath = folder + fileName
    return getFile(audioCtx, filePath)
    .then (sample => {
        console.log('from setupSample function: ', sample)
        return sample})

}
//Should be able to take the above function and alter it. 
//Try using an array of filenames, loop over and load multiple samples.
//Will need to play with this once we get one file working.

export function playSample(audioContext, audioBuffer) {
    const sampleSource = audioContext.createBufferSource()
    sampleSource.buffer = audioBuffer
    sampleSource.connect(audioContext.destination)
    sampleSource.start()
    return sampleSource
}