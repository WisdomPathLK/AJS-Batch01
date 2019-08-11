var TaxiSystem = function( settings ){

    function createTaxiList( data ){
        
        var $selector = $( settings.selector );
        var $ul = $('<ul>');

        data.forEach(function( service, index ){
            console.log( service );
            var $li = $('<li>');

            var $title = $('<h3>').text( service.name );
            var $webURL = $('<a>')
                                    .attr('href',service.website )
                                    .text( service.website );

            $li.append( $title, $webURL );
            $ul.append( $li );
        });
    
        $selector.append( $ul );
    }

    $.ajax( settings.api )
        .done(function( data ){
            createTaxiList( data );
        })
        .fail(function(){
            console.error("Please check the API");
        });
    
}({
    api:'https://taxinfoapp-530f4.firebaseio.com/TAXI.json',
    selector:'#taxi-services',
    title:'Taxi Services in Sri Lanka'
});