window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('message', e => {
        // 카카오 api 메시지와 충돌 방지
        if(!(e.origin == 'https://kapi.kakao.com' || e.origin == 'https://kauth.kakao.com')) {
            let { data } = e;

            // 부모 윈도우에서 origin 을 쏴줘서 실제 쏴준 곳과 일치하는지 확인
            // 크롬 확장에서 보낸 것을 확인용 테스트.
            if( data.origin && data.origin === e.origin) {
                console.log(data);
                // 일단 테스트로 글로벌로 적용
                window.parsedData = data.parsedData;
            }
        }
    }, false);
    // DOM 호출 원할때
    window.parent.postMessage('requestDataFromParent', '*');
});