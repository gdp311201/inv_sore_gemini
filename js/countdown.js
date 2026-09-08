/**
 * js/countdown.js
 * Modul Hitung Mundur Acara
 */

import { CONFIG } from './config.js';

let countdownInterval = null;

export function initCountdown() {
    const targetDateStr = CONFIG.eventDate || '2026-10-24T09:00:00+07:00';
    const targetTime = new Date(targetDateStr).getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');

    if (!daysEl && !hoursEl && !minutesEl && !secondsEl) return;

    if (countdownInterval) clearInterval(countdownInterval);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (countdownContainer) {
                countdownContainer.innerHTML = `<div class="event-started-msg">Acara Sedang / Telah Berlangsung</div>`;
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}
