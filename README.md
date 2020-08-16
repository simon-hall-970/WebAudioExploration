# Drum Machine
Building a drum machine using Web Audio API with React and Redux.

---


#### 1. Load and play single bass drum sample.
Initializing the audio context.  Create an audio engine js file to get, decode, and buffer a sample from public folder. Create react jsx component for user interface.

Use Redux to store a 'kit' object.  This object holds the name of the kit piece and the associated buffer

#### 2. Load all samples associated with a predefined Kit into separate buffers and play each sample individually.
Use one button that calls an object with 'name: filepath' data for a kit. Loop over that object to get, decode, and buffer. This calls multiple promises in a loop so need to then resolve those promises and store the results in the Redux 'kit' object so each piece can be played individually.

#### 3. Add a scheduling feature to schedule playback over time.
- Create a tempo control
- Create a scheduling engine in js. This will need to use the WebAudio clock for sample accurate scheduling of sound events and a JavaScript clock for lookahead to changes on the fly.  See Chris Wilson's 2013 article [A Tale of Two Clocks](https://www.html5rocks.com/en/tutorials/audio/scheduling/#toc-usingsettimeout)
- Using two bars of eighth notes in common time to start.

#### 4. Add scheduling for multiple tracks
- Add reducers to allow for multiple tracks.
- Update play function to accommodate multiple tracks.
- Revise shape of state to provide better data structure.

#### 4. Add volume controls
- Overall volume control at project level
- Channel volume control at track level - for mixing
- Sample volume control for each beat to create dynamic variation, control accents, play ghost notes, etc.





