function updateThemeByTime() {
  const now = new Date();
  //const currentMinute = (now.getMinutes() * 60) + now.getSeconds();
  const currentSecond = now.getSeconds();
  const distanceFromNoon = Math.abs(currentSecond - 30);
  const brightness = (1 - (distanceFromNoon / 30)) * 80;

  const root = document.documentElement; 
  
  root.style.setProperty('--bg-color', `hsl(0, 0%, ${brightness}%)`);
  if (brightness > 50) {
    root.style.setProperty('--select-color', '#111111');
    root.style.setProperty('--text-color', '#ffff00');
  } else {
    root.style.setProperty('--select-color', '#fff');
    root.style.setProperty('--text-color', '#0000ff');
  }
}

updateThemeByTime();
setInterval(updateThemeByTime, 2000);