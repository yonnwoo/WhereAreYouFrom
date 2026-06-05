function generateRandomBreaks() {
  // 1. 문서 전체에서 class가 'random-space'인 모든 요소를 다 찾아서 모아옵니다.
  const spaces = document.querySelectorAll('.random-space');
  
  // 2. 찾아낸 각각의 구역(space)마다 반복해서(forEach) 랜덤 <br>을 넣어줍니다.
  spaces.forEach(function(space) {
    
    // 각 구역마다 서로 다른 랜덤 숫자를 뽑습니다.
    const randomCount = Math.floor(Math.random() * 17) + 1;
    const brTags = "<br>".repeat(randomCount);
    
    // 현재 작업 중인 구역에 <br>을 집어넣습니다.
    space.innerHTML = brTags;
    
  });
}

window.addEventListener('load', generateRandomBreaks);