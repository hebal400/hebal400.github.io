export default function getParsedData(callback = null) {

    // iframe 상태일때만 동작하게
    if(window.parent === window) {
        console.error("iframe 상태가 아니면 \n해당 함수를 콜할 수 없어요!");
        callback({
            result: false,
        })
        return;
    }
    
    let whenReceivedData = function (event) {
        window.removeEventListener('message', whenReceivedData, false);
        // 카카오 api 메시지와 충돌 방지
        if(!(event.origin === 'https://kapi.kakao.com' || event.origin === 'https://kauth.kakao.com')) {
            let { data } = event;

            // 부모 윈도우에서 origin 을 쏴줘서 실제 쏴준 곳과 일치하는지 확인
            // 크롬 확장에서 보낸 것을 확인용 테스트.
            if( data.origin && data.origin === event.origin) {
                // 일단 테스트로 글로벌로 적용
                // window.parsedData = data.parsedData;
                
                // 콜백함수 있으면 실행
                if(callback !== null) callback(data);
            }
        }

    }

    window.addEventListener('message', whenReceivedData, false);

    // 부모 측에 메시지 전달
    window.parent.postMessage('requestDataFromParent', '*');

}