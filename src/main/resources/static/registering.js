$(function(){

    hentAlleBiler();
});


function hentAlleBiler() {
    $.get( "/hentBiler", function( biler ) {
        formaterBiler(biler);
    });
}

function formaterBiler(biler){
    let ut = "<select id='valgtMerke' onchange='finnTyper()'>";

    let forrigeMerke = "";
    ut+="<option>Velg merke</option>";
    for (let bil of biler){
        if(bil.bilmerke !== forrigeMerke){
            ut+="<option>"+bil.bilmerke+"</option>";
        }
        forrigeMerke = bil.bilmerke;
    }
    ut+="</select>";
    $("#bilmerke").html(ut);
}

function finnTyper(){
    const valgtMerke = $("#valgtMerke").val();
    $.get( "/hentBiler", function(biler) {
        formaterTyper(biler,valgtMerke);
    });
}
function formaterTyper(biler,valgtMerke){
    let ut = "<select id='valgtType'>";
    for(let bil of biler ){
        if(bil.bilmerke === valgtMerke){
            ut+="<option>"+bil.biltype+"</option>";
        }
    }
    ut+="</select>";
    $("#biltype").html(ut);
}




function regMotorvogn(){

    let motor = {
        personnummer: $("#personnummer").val(),
        navn: $("#navn").val(),
        addresse: $("#addresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke : $("#bilmerke").val(),
        biltype : $("#biltype").val()
    };


    const url="/lagre"
    $.post(url, motor, function(data){
        henteAlle();
    });
    window.location.href="/";

    emptyfeltene();

}
function emptyfeltene(){
    $("#personnummer").val(" ");
    $("#navn").val(" ");
    $("#addresse").val(" ");
    $("#kjennetegn").val(" ");
    $("#bilmerke").val("---Velge en merke---");
    $("#biltype").val("---Velge en biltype---");
}