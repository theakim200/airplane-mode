// HTML 요소들 가져오기
const statusSvg = document.getElementById('status-svg');
const body = document.body;

// SVG 파일 경로 (GitHub에 업로드할 파일명)
const ONLINE_SVG = 'online.png';
const OFFLINE_SVG = 'offline.png';

// 연결 상태 업데이트 함수
function updateConnectionStatus() {
    // 로딩 상태 표시
    body.classList.add('loading');
    
    if (navigator.onLine) {
        // 온라인 상태 - ONLINE SVG 표시
        statusSvg.src = ONLINE_SVG;
        statusSvg.alt = 'ONLINE';
        console.log('연결됨: 온라인 상태 - ONLINE SVG 표시');
    } else {
        // 오프라인 상태 - OFFLINE SVG 표시
        statusSvg.src = OFFLINE_SVG;
        statusSvg.alt = 'OFFLINE';
        console.log('연결 끊김: 오프라인 상태 - OFFLINE SVG 표시');
    }
}

// SVG 로드 완료 후 로딩 상태 해제
statusSvg.addEventListener('load', () => {
    body.classList.remove('loading');
});

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

// 디버깅용
console.log('초기 연결 상태:', navigator.onLine ? '온라인' : '오프라인');