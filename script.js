// HTML 요소들 가져오기
const statusText = document.getElementById('status-text');
const body = document.body;
const indicator = document.getElementById('indicator');

// 연결 상태 업데이트 함수
function updateConnectionStatus() {
    if (navigator.onLine) {
        // 온라인 상태
        statusText.textContent = 'CONTROL';
        body.className = 'online';
        console.log('online');
    } else {
        // 오프라인 상태
        statusText.textContent = 'FREEDOM';
        body.className = 'offline';
        console.log('offline');
    }
}

// 페이지 로드 시 초기 상태 설정
window.addEventListener('load', () => {
    updateConnectionStatus();
    console.log('page loaded, connected');
});

// 온라인 상태로 변경될 때
window.addEventListener('online', () => {
    updateConnectionStatus();
    console.log('event: online');
});

// 오프라인 상태로 변경될 때
window.addEventListener('offline', () => {
    updateConnectionStatus();
    console.log('event: offline');
});

// 디버깅용: 현재 상태를 콘솔에 출력
console.log('connection:', navigator.onLine ? 'online' : 'offline');