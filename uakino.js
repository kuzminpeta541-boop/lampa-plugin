(function () {
    'use strict';

    if (!window.Lampa) return;

    function openUakino() {
        Lampa.Noty.show('UAKINO');

        if (Lampa.Utils && Lampa.Utils.openUrl) {
            Lampa.Utils.openUrl('https://uakino.best/ua/');
        } else {
            window.open('https://uakino.best/ua/', '_blank');
        }
    }

    Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {

            try {
                Lampa.Controller.add('uakino', {
                    title: 'UAKINO',
                    icon: 'movie',
                    onSelect: openUakino
                });
            }
            catch (err) {
                console.log('UAKINO plugin error:', err);
            }

        }
    });

})();
