$(function(){
    setupErrorHandler();
    hentAlle();
});

const setupErrorHandler = () => {
    $.ajaxSetup({
        error: (data) => {
            $("#error").text(data.responseJSON.message)
        }
    })
}

function regMotorvogn(){

    let motor = {
        personnummer: $("#personnummer").val(),
        navn: $("#navn").val(),
        addresse: $("#addresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke : $("#bilmerk").val(),
        biltype : $("#biltype").val()
    };


    const url="/lagre"
    $.post(url, motor, function(data){
        henteAlle();
        });

        emptyfeltene();



}
function emptyfeltene(){
    $("#personnummer").val(" ");
    $("#navn").val(" ");
    $("#addresse").val(" ");
    $("#kjennetegn").val(" ");
    $("#bilmerk").val("---Velge en merke---");
    $("#biltype").val("---Velge en biltype---");
}

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
        "<th>Kjennetegn</th><th>Bilmerke </th><th>Biltype</th></tr>";
    for (let motoren of motorer){
        ut+= "<tr><td>" + motoren.personnummer +"</td><td>"+ motoren.navn +"</td><td>"+ motoren.addresse +"</td><td>"+ motoren.kjennetegn +" </td><td>"+
            motoren.bilmerke +"</td><td>"+ motoren.biltype+"</td>"+
            "<td><button class='btn btn-primary' onclick='endring(" + bil.id + ")'>Endre</button></td>" +
            "<td><button class='btn btn-danger' onclick='slettEn(" + bil.id + ")'>Slett</button></td> </tr>";
    }
    ut+="</table>";
    $("#biler").html(ut);
}


const endring = (id) =>{
    window.location.href = "/endre.html?" + id
}

function slettEn(id){
    let url = "/slettEn?id="+id;
    $.get(url, function (){
        henteAlle();
    });
}