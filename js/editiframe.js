document.addEventListener("DOMContentLoaded", function() {
  // 화면 너비가 768px 이하(모바일)인지 확인
  if (window.innerWidth <= 768) {
    // 문서 내의 모든 iframe 요소를 찾음
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(function(iframe) {
      let currentSrc = iframe.getAttribute('src');
      
      // 주소에 useskin=vector가 포함되어 있다면 삭제
      if (currentSrc && currentSrc.includes('useskin=vector')) {
        // useskin=vector 텍스트를 빈 문자열로 교체
        let newSrc = currentSrc.replace('useskin=vector', '');
        
        // 불필요하게 남은 특수기호(? 또는 &) 정리
        newSrc = newSrc.replace(/(&|\?)$/, '').replace('?&', '?');
        
        // 변경된 주소로 iframe 새로고침
        iframe.setAttribute('src', newSrc);
      }
    });
  }
});