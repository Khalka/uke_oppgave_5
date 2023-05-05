$(function(){  // kjøres når dokumentet er ferdig lastet
    hentAlleBiler();
    henteEnMotorvogn();
});

function hentAlleBiler() {
    $.get( "/hentBiler", function( biler ) {
        formaterBiler(biler);
    });
}

function formaterBiler(biler){
    let ut = "<select id='bilmerke' onchange='finnTyper()'>";
    let forrigeMerke = "";
    ut+="<option>Velg merke</option>";
    for (const bil of biler){
        if(bil.bilmerke !== forrigeMerke){
            ut+="<option>"+bil.bilmerke+"</option>";
        }
        forrigeMerke = bil.bilmerke;
    }
    ut+="</select>";
    $("#bilmerke").html(ut);
}

function finnTyper(){
    const valgtMerke = $("#bilmerke").val();
    $.get( "/hentBiler", function( biler ) {
        formaterTyper(biler,valgtMerke);
    });
}
function formaterTyper(biler,valgtMerke){
    let ut = "<select id='biltype'>";
    for(const bil of biler ){
        if(bil.bilmerke === valgtMerke){
            ut+="<option>"+bil.biltype+"</option>";
        }
    }
    ut+="</select>";
    $("#biltype").html(ut);
}

function henteEnMotorvogn(){
    const id = window.location.search.substring(1); // kommer fra kallet i index.js
    const url = "/henteEnMotorvogn?id="+id;
    $.get( url, function(enMotorVogn) {
        // overfør til input-feltene i skjemaet
        $("#id").val(enMotorVogn.id); // må ha med denne for å vite hvilken id
        $("#personnummer").val(enMotorVogn.personnummer);
        $("#navn").val(enMotorVogn.navn);
        $("#addresse").val(enMotorVogn.addresse);
        $("#kjennetegn").val(enMotorVogn.kjennetegn);
        $("#bilmerke").val(enMotorVogn.bilmerke);
        $("#biltype").val(enMotorVogn.biltype);
    });
}

function endreMotorvogn() {
    const motorvogn = {
        id : $("#id").val(),
        personnummer : $("#personnummer").val(),
        navn : $("#navn").val(),
        addresse : $("#addresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        bilmerke : $("#bilmerke").val(),
        biltype : $("#biltype").val(),
    };
    $.post("/endre", motorvogn, function(){
    });

    window.location.href="index.html";
}