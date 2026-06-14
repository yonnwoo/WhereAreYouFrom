document.addEventListener('DOMContentLoaded', () => {
  const toggleLink = document.getElementById('darkModeToggle');
  const body = document.body;

  // 1. 로컬 스토리지에 저장된 사용자 설정 확인
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    // 사용자가 이전에 명시적으로 다크모드를 선택했던 경우
    body.classList.add('dark-mode');
    if (toggleLink) toggleLink.textContent = 'Light-mode';
  } else if (currentTheme === 'light') {
    // 사용자가 이전에 명시적으로 라이트모드를 선택했던 경우
    body.classList.remove('dark-mode');
    if (toggleLink) toggleLink.textContent = 'Dark-mode';
  } else {
    // 2. 저장된 설정이 없는 경우 (첫 방문 시) 시간에 따라 기본 테마 지정
    const currentHour = new Date().getHours();
    
    // 예: 저녁 6시(18시)부터 아침 6시 이전까지는 밤(다크모드)으로 간주
    const isNight = currentHour >= 18 || currentHour < 6;

    if (isNight) {
      body.classList.add('dark-mode');
      if (toggleLink) toggleLink.textContent = 'Light-mode';
    } else {
      // 낮 시간에는 기본 라이트모드 유지
      if (toggleLink) toggleLink.textContent = 'Dark-mode';
    }
  }

  // 3. 토글 버튼 클릭 이벤트 설정
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('dark-mode');

      // 상태 변경 후 로컬 스토리지에 값 저장 및 버튼 텍스트 변경
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleLink.textContent = 'Light-mode';
      } else {
        localStorage.setItem('theme', 'light');
        toggleLink.textContent = 'Dark-mode';
      }
    });
  }
});

// 4. 기존 BG.js와의 충돌 방지를 위한 안전 장치 추가
// html에 BG.js가 포함되어 있지 않을 경우 에러가 나는 것을 방지합니다.
if (typeof updateThemeByTime === 'function') {
  updateThemeByTime();
  setInterval(updateThemeByTime, 2000);
}
