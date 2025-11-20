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
