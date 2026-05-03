(function () {
    try {

        console.log('PLUGIN START');

        // перевірка чи Lampa існує
        if (typeof window.Lampa === 'undefined') {
            console.log('NO LAMPA');
            return;
        }

        // просто нотіфікація без будь-яких API
        setTimeout(function () {
            try {
                Lampa.Noty.show('PLUGIN LOADED OK');
            } catch (e) {
                console.log('Noty error', e);
            }
        }, 2000);

    }
    catch (e) {
        console.log('PLUGIN CRASH:', e);
    }
})();
