// src/lib/audioManager.ts
export class AudioManager {
    private audioContext: AudioContext;
    private musicNode: MediaElementAudioSourceNode | null = null;
    private gainNode: GainNode;
    private crackleNode: MediaElementAudioSourceNode | null = null;
    private crackleGainNode: GainNode;
  
    constructor() {
      this.audioContext = new AudioContext();
      this.gainNode = this.audioContext.createGain();
      this.crackleGainNode = this.audioContext.createGain();
      this.crackleGainNode.gain.value = 0.05; // Adjust crackle volume
      this.gainNode.connect(this.audioContext.destination);
      this.crackleGainNode.connect(this.audioContext.destination);
    }
  
    async playSong(url: string) {
      // Stop any existing playback
      if (this.musicNode) {
        this.musicNode.disconnect();
      }
  
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      
      const source = this.audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.gainNode);
      source.start(0);
      
      this.startVinylNoise();
    }
  
    startVinylNoise() {
      if (!this.crackleNode) {
        const audio = new Audio('/vinyl-crackle.mp3');
        audio.loop = true;
        this.crackleNode = this.audioContext.createMediaElementSource(audio);
        this.crackleNode.connect(this.crackleGainNode);
        audio.play();
      }
    }
  
    stopVinylNoise() {
      if (this.crackleNode) {
        this.crackleNode.disconnect();
        this.crackleNode = null;
      }
    }
  
    stop() {
      if (this.musicNode) {
        this.musicNode.disconnect();
        this.musicNode = null;
      }
      this.stopVinylNoise();
    }
  }