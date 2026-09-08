/**
 * js/rsvp.js
 * Handler Form RSVP & Ucapan
 */

export function initRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('rsvp-name')?.value;
        const status = document.getElementById('rsvp-status')?.value;
        
        alert(`Terima kasih ${name}, konfirmasi kehadiran Anda (${status}) telah tersimpan!`);
        form.reset();
    });
}
