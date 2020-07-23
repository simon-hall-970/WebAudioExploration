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

