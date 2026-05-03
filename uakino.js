Lampa.Plugin.create({
    name: 'UAKINO',
    version: '1.0.0',
    description: 'Фільми з UAKINO',

    init: function () {
        Lampa.Noty.show('UAKINO активовано');

        function openSite() {
            window.open('https://uakino.best/ua/', '_blank');
        }

        Lampa.Listener.follow('app', function(e){
            if(e.type == 'ready'){
                Lampa.Controller.add('uakino_btn', {
                    icon: 'movie',
                    onSelect: openSite
                });
            }
        });
    }
});