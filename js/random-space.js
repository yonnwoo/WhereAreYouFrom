function generateRandomBreaks() {
  // 1. 문서 전체에서 class가 'random-space'인 모든 요소를 다 찾아서 모아옵니다.
  const spaces = document.querySelectorAll('.random-space');
  
  // 2. 현재 화면 너비를 확인하여 모바일인지 PC인지 판별합니다.
  const isMobile = window.innerWidth <= 768;
  
  // 3. 모바일이면 최대 10개, PC면 최대 25개로 설정합니다. (숫자는 자유롭게 변경하세요)
  const maxCount = isMobile ? 8 : 25;
  
  // 4. 찾아낸 각각의 구역(space)마다 반복해서(forEach) 랜덤 <br>을 넣어줍니다.
  spaces.forEach(function(space) {
    
    // 각 구역마다 1부터 maxCount 사이의 랜덤 숫자를 뽑습니다.
    const randomCount = Math.floor(Math.random() * maxCount) + 1;
    const brTags = "<br>".repeat(randomCount);
    
    // 현재 작업 중인 구역에 <br>을 집어넣습니다.
    space.innerHTML = brTags;
    
  });
}

// 웹페이지가 처음 로드될 때 실행
window.addEventListener('load', generateRandomBreaks);

// (선택사항) 만약 스마트폰을 가로로 돌리거나 브라우저 창 크기를 조절할 때도 
// 즉시 반영되게 하고 싶다면 아래 주석을 해제하세요.
// window.addEventListener('resize', generateRandomBreaks);