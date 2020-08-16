// set up some constant variables

//scheduling variables
export const lookahead = 25 //milliseconds
export const scheduleAheadTime = 0.1 //seconds

//Note information
export const measures = 2 
export const subdivision = 8 //eighth notes (quaver)

//Meter
export const beatsPerMeasure = 4  //count per measure (top number in time signature)
export const beatValue = 4  //note value that gets the count 4 = quarter note (crotchet) (bottom number in time signature)

export const totalNotes = (subdivision/beatValue) * beatsPerMeasure * measures
