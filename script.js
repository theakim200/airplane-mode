// HTML 요소들 가져오기
const statusText = document.getElementById('status-text');
const body = document.body;
const indicator = document.getElementById('indicator');

// 연결 상태 업데이트 함수
function updateConnectionStatus() {
    if (navigator.onLine) {
        // 온라인 상태
        statusText.textContent = 'ONLINE';
        body.className = 'online';
        console.log('연결됨: 온라인 상태');
    } else {
        // 오프라인 상태
        statusText.textContent = 'OFFLINE';
        body.className = 'offline';
        console.log('연결 끊김: 오프라인 상태');
    }
}

// 페이지 로드 시 초기 상태 설정
window.addEventListener('load', () => {
    updateConnectionStatus();
    console.log('페이지 로드 완료, 연결 상태 확인됨');
});

// 온라인 상태로 변경될 때
window.addEventListener('online', () => {
    updateConnectionStatus();
    console.log('이벤트: 온라인 상태로 변경됨');
});

// 오프라인 상태로 변경될 때
window.addEventListener('offline', () => {
    updateConnectionStatus();
    console.log('이벤트: 오프라인 상태로 변경됨');
});

// 디버깅용: 현재 상태를 콘솔에 출력
console.log('초기 연결 상태:', navigator.onLine ? '온라인' : '오프라인');