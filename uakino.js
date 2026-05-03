Lampa.Plugin.create({
    name: 'UAKINO',
    version: '1.0.2',
    description: 'UAKINO',

    init: function () {

        function openUakino(){
            Lampa.Noty.show('UAKINO');

            Lampa.Utils.openUrl('https://uakino.best/ua/');
        }

        Lampa.Listener.follow('app', function(e){
            if(e.type == 'ready'){

                Lampa.Controller.add('uakino', {
                    icon: 'movie',
                    onSelect: openUakino
                });

            }
        });

    }
});
