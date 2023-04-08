$('button').click(function() {

    var url = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var tag = $('input').val();
    var data = {
        tags: tag,
        format: 'json'
    };

    function mostrarFotos(datos){
        var fotosHtml = '';
        $.each(datos.items, function (i, foto) { 
             fotosHtml += '<div class="col-lg-3">';
            fotosHtml += '<a href="'+ foto.link + '">';
            fotosHtml += '<img src="'+ foto.media.m + '" />';
            fotosHtml += '</a>';
             fotosHtml += '</div>';
        });
        $('#fotos').html(fotosHtml);
    }

    $.getJSON(url, data, mostrarFotos);
});


