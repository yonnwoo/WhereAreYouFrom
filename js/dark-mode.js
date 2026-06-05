// 1. 페이지가 로드될 때 로컬 스토리지 확인 후 다크모드 상태 복원
document.addEventListener('DOMContentLoaded', () => {
  const toggleLink = document.getElementById('darkModeToggle');
  const body = document.body;

  // 로컬 스토리지에 'theme: dark'가 저장되어 있다면 다크모드 적용
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (toggleLink) toggleLink.textContent = 'light-mode';
  } else {
    if (toggleLink) toggleLink.textContent = 'dark-mode';
  }

  // 2. 다크모드 토글 클릭 이벤트 설정
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('dark-mode');

      // 상태 변경 후 로컬 스토리지에 값 저장 및 버튼 텍스트 변경
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleLink.textContent = 'light-mode';
      } else {
        localStorage.setItem('theme', 'light');
        toggleLink.textContent = 'dark-mode';
      }
    });
  }
});

updateThemeByTime();
setInterval(updateThemeByTime, 2000);