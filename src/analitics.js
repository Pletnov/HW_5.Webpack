function createAnalitics() {
    let isDestroy = true;
    let counter = 0;
 
    const listener = () => counter++;
 
    document.addEventListener('click', listener);
 
    return {
        getClicks() {
            if (isDestroy) {
                return counter;
            }
            else {
                isDestroy = false;
                return 'Analitics is Destroyed'
            }
        },
 
        destroy() {
            document.removeEventListener('click', listener);
            isDestroy = false;
        },
 
        run() {
            counter = 0;
            isDestroy = true;
            document.addEventListener('click', listener);
        }
    }
}
 
window.analitics= createAnalitics();