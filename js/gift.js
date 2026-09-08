/**
 * js/gift.js
 * Handler Fitur Salin Rekening
 */

export function initGift() {
    const copyButtons = document.querySelectorAll('.btn-copy, [data-copy]');
    copyButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const textToCopy = this.getAttribute('data-copy') || this.innerText;
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);
                showCopyFeedback(this, 'Berhasil Disalin!');
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyFeedback(this, 'Berhasil Disalin!');
            }
        });
    });
}

function showCopyFeedback(buttonElement, message) {
    const originalText = buttonElement.innerHTML;
    buttonElement.innerHTML = `<i class="fa-solid fa-check"></i> ${message}`;
    buttonElement.disabled = true;

    setTimeout(() => {
        buttonElement.innerHTML = originalText;
        buttonElement.disabled = false;
    }, 2000);
}
