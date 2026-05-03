Lampa.Plugin.create({
    name: 'UAKINO',
    version: '1.0.1',
    description: 'UAKINO кнопка',

    init: function () {

        Lampa.Listener.follow('app', function(e){
            if(e.type == 'ready'){

                Lampa.Menu.add({
                    title: 'UAKINO',
                    icon: 'movie',
                    onSelect: function(){
                        Lampa.Noty.show('Відкриваю UAKINO');

                        Lampa.Activity.push({
                            url: 'https://uakino.best/ua/',
                            title: 'UAKINO'
                        });
                    }
                });

            }
        });

    }
});
