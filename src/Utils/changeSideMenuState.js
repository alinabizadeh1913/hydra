export const changeSideMenuState = () => {
    const trigger = document.querySelector('#navbar .burger-menu');
    const sideMenu = document.querySelector('#side-menu');
    const close = document.querySelector('#side-menu .close i');
    let isClick = false;

    trigger.addEventListener('click', () => {
        isClick = !isClick;
        if(isClick) {
            sideMenu.style.transform = 'translateX(0)'
        }else{
            sideMenu.style.transform = 'translateX(100%)'
        }
    })

    close.addEventListener('click',() => {
        isClick = !isClick;
        if(isClick) {
            sideMenu.style.transform = 'translateX(0)'
        }else{
            sideMenu.style.transform = 'translateX(100%)'
        }
    })
}