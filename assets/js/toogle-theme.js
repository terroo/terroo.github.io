$(document).ready(function(){

  $(".artigo table").addClass("table table-bordered");
  $(".pagina table").addClass("table table-bordered");

  $("a[href^='http']:not([href^='https://terminalroot.com.br'])").attr("target","_blank");
	$("a[href^='http']:not([href^='https://terminalroot.com.br'])").attr("rel","noopener noreferrer");

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


  //$('.artigo img').addClass('img-fluid img-thumbnail');

  // Tooltip para icon mode tema
  $('#toogle-theme').tooltip({ boundary: 'window' });

  $("#toogle-theme").click(function(){

    if ($('#toogle-theme').hasClass('dark-mode')){
      $('link[href="/assets/css/main-dark.css"]').attr('href','/assets/css/main-light.css');
      $(this).removeClass("dark-mode").addClass("light-mode");
      $("#too").removeClass("far").addClass("fas");
      $(".blog .card").removeClass("bg-dark text-white").addClass("bg-default text-dark");
      $(".blog .card-header").addClass("bg-light text-dark").removeClass("bg-dark text-white");
      $(".blog-page .card").removeClass("bg-dark text-white").addClass("bg-default text-dark");
      $(".blog-page .card-header").addClass("bg-light text-dark").removeClass("bg-dark text-white");
      $(".artigo").addClass("bg-branco");

    }else{
      $('link[href="/assets/css/main-light.css"]').attr('href','/assets/css/main-dark.css');
      $(this).removeClass("light-mode").addClass("dark-mode");
      $("#too").removeClass("fas").addClass("far");
      $(".blog .card").removeClass("bg-light").addClass("bg-dark text-white");
      $(".blog .card-header").removeClass("bg-light text-dark").addClass("bg-dark text-white");
      $(".blog-page .card").removeClass("bg-light").addClass("bg-dark text-white");
      $(".blog-page .card-header").removeClass("bg-light text-dark").addClass("bg-dark text-white");
      $(".artigo").removeClass("bg-branco");
    }

  });

   // Ao clicar no de volta ao topo
  $("#js-scroll-vanilla").click(function(){
    window.scrollTo(0, 0);
  });

  // Animação do scroll que só aparece quando rola o mouse
  var mybutton = document.getElementById("js-scroll-vanilla");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // Ver css para display:none ^


  // SIDEBAR INÍCIO
  //var mybutton2 = document.getElementById("sidebar");
  //window.onscroll = function() {scrollFunction()};
  //function scrollFunction() {
  //  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  //    $(".sidebar").addClass("top-zero");
  //  }else{
  //    $(".sidebar").removeClass("top-zero");
  //  }
  //}
  // SIDEBAR FINAL

});
