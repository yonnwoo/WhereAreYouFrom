    const link = document.getElementById('wikiLink');
    const popup = document.getElementById('hoverPopup');
    
    // 1. 마우스가 링크에 올라갔을 때
    link.addEventListener('mouseenter', function(e) {
      const title = this.getAttribute('data-title');
      
      // 위키백과 요약 API 주소 (CORS가 허용되어 있어 외부에서도 호출 가능합니다!)
      const apiUrl = `https://ko.wikipedia.org/api/rest_v1/page/summary/${title}`;

      // 2. 데이터 몰래 가져오기
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // 3. 가져온 데이터를 팝업 안에 채워 넣기
          document.getElementById('popupTitle').innerText = data.title;
          document.getElementById('popupText').innerText = data.extract; // 요약 텍스트
          if(data.thumbnail) {
            document.getElementById('popupImg').src = data.thumbnail.source;
            document.getElementById('popupImg').style.display = 'block';
          }
          
          // 마우스 근처로 팝업 위치 이동 후 보여주기
          popup.style.left = e.pageX + 'px';
          popup.style.top = (e.pageY + 20) + 'px';
          popup.style.display = 'block';
        });
    });

    // 4. 마우스가 링크에서 벗어났을 때 팝업 숨기기
    link.addEventListener('mouseleave', function() {
      popup.style.display = 'none';
    });