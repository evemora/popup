const contenido = document.getElementById("contenido");
let marque = "Moncler";
let prix = 55;

contenido.innerHTML = <h2>${marque}</h2> ;
contenido.innerHTML += <h3>${prix}</h3> ;

if(prix => 75){
    alert ("Ta proposition est enregistré");

}else if(prix > 63{
    alert("Nous allons évaluer ta proposition");
}else{
    alert("Tu dois augmenter le prix pour participer");
}

if (localStorage.getItem(‘cookieSeen’) != ‘shown’) {
    $(‘.cookie-banner’).delay(2000).fadeIn();
    localStorage.setItem(‘cookieSeen’,’shown’)
  };
  $(‘.close’).click(function() {
    $(‘.cookie-banner’).fadeOut();
  })