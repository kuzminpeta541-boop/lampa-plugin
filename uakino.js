(function () {
    'use strict';

    console.log('UAKINO plugin loaded');

    if (!window.Lampa) {
        console.log('Lampa not found');
        return;
    }

    Lampa.Noty.show('UAKINO plugin OK');

})();
