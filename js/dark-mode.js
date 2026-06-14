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

document.addEventListener("DOMContentLoaded", function() {
  // 화면이 터치 기기인지 확인
  if (window.matchMedia("(hover: none)").matches) {
    const abbrElements = document.querySelectorAll('abbr[title]');
    
    abbrElements.forEach(function(abbr) {
      // 1. 포커스를 받을 수 있도록 속성 추가
      abbr.setAttribute('tabindex', '0');
      
      // 2. 터치(클릭) 이벤트 제어
      abbr.addEventListener('click', function(e) {
        // 'data-clicked' 상태가 true가 아니라면 (즉, 처음 터치한 거라면)
        if (abbr.getAttribute('data-clicked') !== 'true') {
          e.preventDefault(); // <a> 태그의 기본 동작(링크 이동)을 강제로 막음
          
          // 혹시 다른 툴팁이 열려있다면 모두 닫힘 상태로 초기화
          document.querySelectorAll('abbr[title]').forEach(el => el.setAttribute('data-clicked', 'false'));
          
          // 현재 터치한 요소를 '열림' 상태로 변경하고 포커스 주기
          abbr.setAttribute('data-clicked', 'true');
          abbr.focus(); 
        } 
        // 이미 'true'라면 (두 번째 터치) e.preventDefault()를 안 하므로 정상적으로 링크로 이동!
      });

      // 3. 빈 화면을 터치해서 포커스가 풀리면(blur) 다시 초기 상태로 되돌림
      abbr.addEventListener('blur', function() {
        abbr.setAttribute('data-clicked', 'false');
      });
    });
  }
});