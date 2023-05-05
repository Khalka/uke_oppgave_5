$(function(){

    hentAlle();
});





function slettAlle(){
    $.get("slettAll", function (){
        henteAlle();
    });

}

function henteAlle(){
    $.get("/henteAll", function (motorer){
        formater(motorer);
    });

}

function formater(motorer){
    let ut ="<table class='table table-strped'><tr><th> Personnummer</th><th>Navn</th><th>Addresse </th>"+
        "<th>Kjennetegn</th><th>Bilmerke </th><th>Biltype</th><th></th><th></th></tr>";
    for (let motoren of motorer){
        ut+= "<tr><td>" + motoren.personnummer +"</td><td>"+ motoren.navn +"</td><td>"+ motoren.addresse +"</td><td>"+ motoren.kjennetegn +" </td><td>"+
            motoren.bilmerke +"</td><td>"+ motoren.biltype+"</td>"+
            "<td><button class='btn btn-primary' onclick='endring(" + motoren.id+ ")'>Endre</button></td>" +
            "<td><button class='btn btn-danger' onclick='slettEn(" + motoren.personnummer + ")'>Slett</button></td> </tr>";
    }
    ut+="</table>";
    $("#biler").html(ut);
}


function endring(id) {
    window.location.href = "/endre.html?"+id;
}

function slettEn(personnummer){
    let url = "/slettEn?personnummer="+personnummer;
    $.get(url, function (){
        henteAlle();
    });
}