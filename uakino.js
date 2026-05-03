(function () {
    'use strict';

    if (!window.Lampa) return;

    function openUakino() {
        Lampa.Noty.show('Відкриваю UAKINO');

        if (Lampa.Utils && Lampa.Utils.openUrl) {
            Lampa.Utils.openUrl('https://uakino.best/ua/');
        } else {
            window.open('https://uakino.best/ua/', '_blank');
        }
    }

    // чекаємо відкриття сторінки фільму
    Lampa.Listener.follow('full', function (e) {

        // важливо: саме complete (у деяких збірках пишеться complite)
        if (e.type === 'complite' || e.type === 'complete') {

            try {
                // e.object = сторінка фільму
                if (e.object && e.object.addButton) {

                    e.object.addButton({
                        title: 'UAKINO',
                        icon: 'link',
                        onSelect: openUakino
                    });

                } else {
                    console.log('UAKINO: addButton не знайдено в цій версії Lampa');
                }

            } catch (err) {
                console.log('UAKINO error:', err);
            }
        }
    });

})();
