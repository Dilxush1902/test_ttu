function pad(n) {
  return n < 10 ? `0${n}` : n;
}

export default function codeExpireDuration(sec) {
  const m = Math.floor(sec / 60);
  const n = Math.floor(sec - m * 60);
  return `${pad(m)}:${pad(n)}`;
}
