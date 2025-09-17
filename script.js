// HTML 요소들 가져오기
const statusSvg = document.getElementById('status-svg');
const body = document.body;

// PNG 파일 경로
const ONLINE_PNG = 'online.png';
const OFFLINE_PNG = 'offline.png';

// 이미지 프리로딩용 객체들
const onlineImg = new Image();
const offlineImg = new Image();

// 이미지 프리로딩 완료 체크
let imagesLoaded = 0;
let totalImages = 2;

// 이미지 로드 완료 체크 함수
function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded >= totalImages) {
        console.log('모든 이미지 프리로딩 완료');
        // 초기 상태 설정
        updateConnectionStatus();
    }
}

// 연결 상태 업데이트 함수
function updateConnectionStatus() {
    if (navigator.onLine) {
        // 온라인 상태
        statusSvg.src = onlineImg.src;
        statusSvg.alt = 'ONLINE';
        console.log('연결됨: 온라인 상태 - ONLINE PNG 표시');
    } else {
        // 오프라인 상태
        statusSvg.src = offlineImg.src;
        statusSvg.alt = 'OFFLINE';
        console.log('연결 끊김: 오프라인 상태 - OFFLINE PNG 표시');
    }
}

// 이미지 프리로딩 시작
function preloadImages() {
    console.log('이미지 프리로딩 시작...');
    
    // 온라인 이미지 로드
    onlineImg.onload = checkImagesLoaded;
    onlineImg.onerror = () => {
        console.error('온라인 이미지 로드 실패');
        checkImagesLoaded();
    };
    onlineImg.src = ONLINE_PNG;
    
    // 오프라인 이미지 로드
    offlineImg.onload = checkImagesLoaded;
    offlineImg.onerror = () => {
        console.error('오프라인 이미지 로드 실패');
        checkImagesLoaded();
    };
    offlineImg.src = OFFLINE_PNG;
}

// 페이지 로드 시 이미지 프리로딩 시작
window.addEventListener('load', () => {
    preloadImages();
    console.log('페이지 로드 완료, 이미지 프리로딩 중...');
});

// 온라인 상태로 변경될 때
window.addEventListener('online', () => {
    updateConnectionStatus();
    console.log('이벤트: 온라인 상태로 변경됨');
    document.body.style.backgroundColor = "white";
});

// 오프라인 상태로 변경될 때
window.addEventListener('offline', () => {
    updateConnectionStatus();
    console.log('이벤트: 오프라인 상태로 변경됨');
    document.body.style.backgroundColor = "black";
});

// 디버깅용
console.log('초기 연결 상태:', navigator.onLine ? '온라인' : '오프라인');