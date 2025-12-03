// 실제 소리 재생
function playNote(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0; // 반복 눌러도 즉시 재생
    audio.play();
}

// 마우스 클릭으로 건반 누르기
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("mousedown", () => {
        playKey(key);
    });
});

function playKey(key) {
    const note = key.dataset.note;
    key.classList.add("active");
    playNote(note);
}

// 마우스 떼면 효과 제거
document.addEventListener("mouseup", () => {
    document.querySelectorAll(".key").forEach(key => {
        key.classList.remove("active");
    });
});

// 키보드 입력
document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!key) return;

    if (!key.classList.contains("active")) {
        key.classList.add("active");
        playNote(key.dataset.note);
    }
});

document.addEventListener("keyup", (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!key) return;
    key.classList.remove("active");
});

// ★ 현재 사운드 모드 저장하는 변수
let currentMode = "piano"; // piano or string

// 모드 변경 버튼
const btn = document.getElementById("soundModeBtn");
btn.addEventListener("click", () => {
    currentMode = currentMode === "piano" ? "string" : "piano";
    btn.textContent = `모드: ${currentMode === "piano" ? "Piano" : "String"}`;
});

// ★ 실제 소리 재생
function playNote(note) {
    const audio = new Audio(`sounds/${note}_${currentMode}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

// ---------------- 건반 입력 ----------------

// 마우스로 건반 누르기
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("mousedown", () => {
        playKey(key);
    });
});

// 건반 눌림 효과 + 소리
function playKey(key) {
    const note = key.dataset.note;
    key.classList.add("active");
    playNote(note);
}

// 마우스 떼면 원상복구
document.addEventListener("mouseup", () => {
    document.querySelectorAll(".key").forEach(key => {
        key.classList.remove("active");
    });
});

// ---------------- 키보드 입력 ----------------

// 키 눌렀을 때
document.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!key) return;

    if (!key.classList.contains("active")) {
        key.classList.add("active");
        playNote(key.dataset.note);
    }
});

// 키에서 손 뗐을 때
document.addEventListener("keyup", (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!key) return;
    key.classList.remove("active");
});
function playNote(note) {
    let ext = currentMode === "string" ? "wav" : "mp3";
    const audio = new Audio(`sounds/${note}_${currentMode}.${ext}`);
    audio.currentTime = 0;
    audio.play();
}
