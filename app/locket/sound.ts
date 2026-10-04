let ctx: AudioContext | null = null;
let soundOn = true;

export function setSoundOn(on: boolean) {
  soundOn = on;
}

export function unlockAudio() {
  if (typeof window === "undefined") return;
  const AC = window.AudioContext;
  if (!AC) return;
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") void ctx.resume();
}

function tone(freq: number, duration: number, type: OscillatorType, gain: number, delay = 0) {
  if (!soundOn) return;
  unlockAudio();
  if (!ctx) return;
  const start = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(gain, start + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export function playPlace() {
  tone(560, 0.055, "sine", 0.045);
}

export function playLift() {
  tone(340, 0.05, "sine", 0.035);
}

export function playDeny() {
  tone(196, 0.08, "triangle", 0.04);
  tone(146, 0.1, "triangle", 0.03, 0.07);
}

export function playLock() {
  tone(440, 0.07, "sine", 0.04);
  tone(660, 0.09, "sine", 0.03, 0.05);
}

export function playWin() {
  [523, 659, 784, 1046].forEach((freq, i) => tone(freq, 0.2, "triangle", 0.045, i * 0.08));
}

export function playLose() {
  [392, 330, 262].forEach((freq, i) => tone(freq, 0.16, "sine", 0.035, i * 0.09));
}
