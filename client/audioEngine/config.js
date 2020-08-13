// set up some constant variables

//scheduling variables
const lookahead = 25 //milliseconds
const scheduleAheadTime = 0.1 //seconds

//Note information
const measures = 2 
const subdivision = 8 //eighth notes (semiquaver)

//Meter
const beatsPerMeasure = 4  //count per measure (top number in time signature)
const beatValue = 4  //note value that gets the count 4 = quarter note (quaver) (bottom number in time signature)

const totalNotes = (subdivision/beatValue) * beatsPerMeasure * measures
