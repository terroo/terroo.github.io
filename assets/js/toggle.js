dark = false

function anyElement( e, color ){
  let els = document.getElementsByClassName( e );
  for(i = 0; i < els.length; i++) {
    els[i].style.color = color;
  }
} 

function changeBg( e, colorBg, colorFg ){
  let els = document.getElementsByClassName( e );
  for(i = 0; i < els.length; i++) {
    els[i].style.color = colorFg;
    els[i].style.background = colorBg;
  }
}

function chColorTag( e, color ){
  var h1s = document.getElementsByTagName( e );
  for (var i = 0; i < h1s.length; i++) {
    var h1 = h1s[i];
    h1.style.color = color;
  }
}

function set_dark_theme(){
  document.getElementById("checkbox").checked = true;
  document.getElementsByTagName("body")[0].style.color = "#fff";
  document.getElementsByTagName("body")[0].style.background = "#161625";
  chColorTag("h1", "#fff");
  chColorTag("h2", "#fff");
  anyElement( 'active', '#fff');
  anyElement( 'logo', '#fff');
  anyElement( 'a-card', '#fff');
  anyElement( 'social', '#fff');
  anyElement( 'btn-custom', '#fff');
  changeBg( 'card', '#161625', '#fff');
  changeBg( 'offcanvas', '#161625', '#fff');
  changeBg( 'list-group-item', '#161625', '#fff');
  changeBg( 'slider', '#0b0b18', '#fff');
}

function set_light_theme(){
  document.getElementById("checkbox").checked = false;
  document.getElementsByTagName("body")[0].style.color = "#333";
  document.getElementsByTagName("body")[0].style.background = "#fff";
  document.getElementsByTagName("h1")[0].style.color = "#333";
  document.getElementsByTagName("h2")[0].style.color = "#333";
  chColorTag("h1", "#333");
  chColorTag("h2", "#333");
  anyElement( 'active', '#333');
  anyElement( 'logo', '#333');
  anyElement( 'a-card', '#333');
  anyElement( 'social', '#333');
  anyElement( 'btn-custom', '#333');
  changeBg( 'card', '#fff', '#333');
  changeBg( 'list-group-item', '#fff', '#333');
  changeBg( 'offcanvas', '#fff', '#333');
  changeBg( 'slider', '#ccc', '#333');
}

function toggleTheme(){
  //if( document.cookie.match(/ter_theme=light/) ){
  if( dark == false ){
    set_dark_theme()
    dark = true
  }else{
    /*if( document.cookie.match(/ter_theme=dark/) ){
      document.cookie = document.cookie.replace("dark", "light") + "; Secure; SameSite=Lax"
    }

    if( !document.cookie.match(/ter_theme/) ){
      document.cookie = "Set-Cookie: ter_theme=light; Secure; SameSite=Lax"
    }*/
    set_light_theme()
    dark = false
  }
}


