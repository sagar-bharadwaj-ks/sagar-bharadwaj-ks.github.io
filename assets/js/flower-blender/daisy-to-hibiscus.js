(function () {
    const video = document.getElementById('jekyll-video');
    const container = document.getElementById('progress-container');
    const fill = document.getElementById('progress-fill');
    const handle = document.getElementById('progress-handle');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const errorMsg = document.getElementById('scrubber-error');

    let isScrubbing = false;
    let isReversing = false;
    let reverseInterval;

    const updateUI = () => {
        if (!video.duration || isNaN(video.duration)) return;
        const percent = (video.currentTime / video.duration) * 100;
        fill.style.width = percent + '%';
        handle.style.left = `calc(${percent}% - 8px)`;
    };

    const scrub = (e) => {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = x / rect.width;

        if (video.duration && !isNaN(video.duration)) {
            video.currentTime = percent * video.duration;
            updateUI();
        }
    };

    const startScrubbing = (e) => {
        isScrubbing = true;
        stopPlayback(); // Stop both forward and backward playback
        scrub(e);
        if (e.cancelable) e.preventDefault();
    };

    const stopScrubbing = () => { isScrubbing = false; };

    const startReversePlayback = () => {
        isReversing = true;
        video.pause(); // Pause standard forward playback

        // 30fps approximate refresh for smooth reverse
        reverseInterval = setInterval(() => {
            if (video.currentTime <= 0.05) { // Threshold near zero
                clearInterval(reverseInterval);
                isReversing = false;
                video.play(); // Flip back to forward
            } else {
                video.currentTime -= 0.033; // Approx 1 frame at 30fps
                updateUI();
            }
        }, 33);
    };

    const stopPlayback = () => {
        video.pause();
        clearInterval(reverseInterval);
        isReversing = false;
    };

    playBtn.onclick = (e) => {
        e.stopPropagation();
        if (video.paused && !isReversing) {
            video.play();
        } else {
            stopPlayback();
        }
    };

    video.onclick = () => {
        if (video.paused && !isReversing) {
            video.play();
        } else {
            stopPlayback();
        }
    };

    // When video reaches the end, start reversing
    video.onended = () => {
        startReversePlayback();
    };

    video.onplay = () => {
        playIcon.classList.add('tw-hidden');
        pauseIcon.classList.remove('tw-hidden');
    };

    video.onpause = () => {
        if (!isReversing) {
            playIcon.classList.remove('tw-hidden');
            pauseIcon.classList.add('tw-hidden');
        }
    };

    video.ontimeupdate = () => { if (!isScrubbing && !isReversing) updateUI(); };

    video.onerror = () => {
        errorMsg.classList.remove('tw-hidden');
    };

    container.addEventListener('mousedown', startScrubbing);
    container.addEventListener('touchstart', startScrubbing, { passive: false });
    window.addEventListener('mousemove', (e) => { if (isScrubbing) scrub(e); });
    window.addEventListener('touchmove', (e) => { if (isScrubbing) scrub(e); }, { passive: false });
    window.addEventListener('mouseup', stopScrubbing);
    window.addEventListener('touchend', stopScrubbing);

    video.onloadedmetadata = updateUI;
    if (video.readyState >= 1) {
        updateUI();
    } else {
        video.load();
    }
})();
