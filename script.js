//metodo uno con switch-case
$(document).ready(function () {
  $(".crypt").click(function () {
    var texto = $(".fake-textarea").val();
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
      var letra = texto.charAt(i);
      switch (letra.toLowerCase()) {
        case "a":
          resultado += "ai";
          break;
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += letra;
          break;
      }
    }
    if (window.matchMedia('(max-width: 375px)').matches) {
      // Media query se cumple
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      $(".copy2").css("display", "block");
      $(".copy2").css("left", "-1rem");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado");
        $(".noencontrado2").css("display", "block");
        $(".copy2").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      $(".copy2").css("display", "flex");
      $(".copy2").css("top", "7rem");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado")
        $(".noencontrado2").css("display", "block");
        $(".copy2").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
    } else if (window.matchMedia('(max-width: 3600px)').matches) {
      $(".copy2").css("display", "block");
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado")
        $(".noencontrado2").css("display", "block");
        $(".muñeco").css("display", "block");
        $(".copy2").css("display", "none");

        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
    }
  });
});

//metodo dos con func replace
$(document).ready(function () {
  $(".descrypt").click(function () {
    var texto = $(".fake-textarea").val();
    var resultado = texto
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    //opciones de visualización del condicional para resoluciones de 1px a 375px
    if (window.matchMedia('(max-width: 375px)').matches) {
      // Media query se cumple
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".copy2").css("display", "block");
      $(".copy2").css("left", "-1rem");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado")
        $(".noencontrado2").css("display", "block");
        $(".copy2").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
      //opciones de visualización del condicional para resoluciones de 375px a 758px
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      $(".copy2").css("display", "block");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado")
        $(".noencontrado2").css("display", "block");
        $(".copy2").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
      //opciones de visualización del condicional para resoluciones de 758px a 3600px
    } else if (window.matchMedia('(max-width: 3600px)').matches) {
      $(".copy2").css("display", "block");
      $(".noencontrado").text(resultado);
      $(".noencontrado2").css("display", "none");
      $(".muñeco").css("display", "none");
      if (texto == '') {
        $(".noencontrado").text("Ningún mensaje fue encontrado")
        $(".noencontrado2").css("display", "block");
        $(".muñeco").css("display", "block");
        $(".copy2").css("display", "none");
        // $(".noencontrado2").css("margin-left", "2.2rem");
      }
    }
  });
});

var clipboard = new ClipboardJS('.copy2');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});





