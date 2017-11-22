(function() {
    window.onload = function() {
        var actualImage;
        var modal = document.getElementsByClassName("modal")[0];
        var contenido = document.getElementById("contenido");
        var thumbs = document.getElementById("thumbs");
        var x = document.getElementById("X");
        var imagenes = document.getElementsByClassName("thumb");


        var i;
        for (i = 1; i <= imagenes.length; i++) {
            imagenes[i].onclick = agrandar;
            $('.carousel-inner').append("<div class='item'><img src='/static/imagenes/imagen"+i+".jpg' style='width:100%;'></div>");
        }

        function agrandar() {
            num = this.alt;
            num = parseInt(num);
            $("#myCarousel").carousel(num);
            $("#imagen").attr('src', this.src);
            actualImage = this;
        }

        function agrandarN(imagen) {
            contenido.src = imagen.src;
            actualImage = imagen;
        }

    }

})();