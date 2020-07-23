//create AudioContext with crossbrowser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

//asynchronous function to load file into buffer
function getFile(audioContext, filepath) {
    return fetch(filepath)
    .then(sampleFile => {
        return sampleFile.arrayBuffer()})
    .then(arrayBuffer => {
        return audioContext.decodeAudioData(arrayBuffer)})
    .then(audioBuffer => audioBuffer)
}

//take the file name as a string and call get file with audio Context to prepare sample
function setupSample(fileName) {
    const folder = '../../public/assets/samples/'
    let filePath = folder + fileName
    const sample = getFile(audioCtx, filePath)
    return sample
}
//Should be able to take the above function and alter it. 
//Try using an array of filenames, loop over and load multiple samples.
//Will need to play with this once we get one file working.

