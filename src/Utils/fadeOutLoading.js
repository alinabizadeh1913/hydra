const $ = document;

export const fadeOutLoading = () => {
    const loading = $.querySelector('#loading');
    const body = $.body;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.style.visibility = 'hidden';
            loading.style.opacity = 0;
            body.style.overflowY = 'auto'
        }, 1500);
        setTimeout(() => {
            loading.style.display = 'none';
        }, 2000)
    })
}