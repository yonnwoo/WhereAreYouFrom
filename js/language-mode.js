document.addEventListener('DOMContentLoaded', () => {
  // 한/Eng 버튼을 가리키는 정확한 클래스나 ID로 수정해 주세요.
  const langToggleBtn = document.querySelector('.lang-toggle-btn'); 
  const body = document.body;

  // 1. 브라우저에 저장된 언어 설정 불러오기
  const currentLang = localStorage.getItem('language');
  if (currentLang === 'en') {
    body.classList.add('english-mode');
  }

  // 2. 버튼 클릭 이벤트 설정
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // body 태그에 english-mode 클래스를 추가/제거
      body.classList.toggle('english-mode');

      // 3. 현재 상태를 로컬 스토리지에 저장하여 페이지를 이동해도 유지되게 함
      if (body.classList.contains('english-mode')) {
        localStorage.setItem('language', 'en');
      } else {
        localStorage.setItem('language', 'ko');
      }
    });
  }
});
