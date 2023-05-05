/** onload function -> Runs when the webpage is ready to be manipulated */
$(function(){
    setupErrorHandler();
    hentAlleBiler();
    hentEnMotorvogn();
});


const setupErrorHandler = () => {
    $.ajaxSetup({
        error: (data) => {
            $("#error").text(data.responseJSON.message)
        }
    })
}

let cars = [];              // Stores all cars so that we can use them for both merke and type



/** Fetches all cars (models+types) from server */
function hentAlleBiler() {
    $.get( "/hentBiler", function( bil) {
        cars = bil;
        formaterMerke(bil);
    });
}


/** Formats merke */
function formaterMerke(bil){
    let merkeList = [];                         // Using array (instead of forrige_merke, as in motorvogn3.zip solution)
                                                // to handle Biler regardless of registration order in array on server

    let ut = "<select id='bilmerke' onchange='formaterTyper()'>";
    ut+="<option>--Velg merke--</option>";
    for (const bilen of bil){
        if(!merkeList.includes(bilen.merke)){
            ut+="<option>"+bilen.merke+"</option>";
        }
        merkeList.push(bilen.merke);
    }
    ut+="</select>";
    $("#bilmerke-div").html(ut);
}


/** Formats car types */
function formaterTyper(){
    const valgtMerke = $("#bilmerke").val();
    let ut = "<select id='biltype'>";
    ut+="<option>--Velg type--</option>";
    for(const bil of cars ){
        if(bil.bilmerke === valgtMerke){
            ut+="<option>"+bil.biltype+"</option>";
        }
    }
    ut+="</select>";
    $("#biltype-div").html(ut);
}




const hentEnMotorvogn = () => {
    const id = window.location.search.substring(1)
    const url = '/hentEnMotorvogn?id=' + id

    $.get(url, data => {
        console.log(data)
        $('#id').val(data.id)
        $('#personnummer').val(data.personnummer)
        $('#navn').val(data.navn)
        $('#addresse').val(data.addresse)
        $('#kjennetegn').val(data.kjennetegn)
        $('#bilmerke').val(data.bilmerke)
        // Venter litt med å sette type siden onchange funksjonen til merke må kjøre først
        setTimeout(() => $('#biltype').val(data.biltype), 1000)
    })
}





/** Entry registration
 *  Checks for errors in user input and performs get request if all is good.
 */
function endreMotorvogn() {
    const id = $("#id").val();
    const pnr = $("#personnummer").val();
    const nvn = $("#navn").val();
    const add = $("#addresse").val();
    const kjt = $("#kjennetegn").val();
    const mrk = $("#bilmerke").val();
    const typ = $("#biltype").val();

    // Did you know you can do maths with boolean values? True = 1; False = 0.
    // If any of the fields is false, it will be a multiplication by 0. Therefore the result is 0 = false.
    let riktig = sjekkGyldig(pnr, "Personnummer") *  sjekkGyldig(nvn, "Navn") *  sjekkGyldig(add, "Adresse") *  sjekkGyldig(kjt, "Kjennetegn") *  sjekkGyldig(mrk, "Merke") *  sjekkGyldig(typ, "Type");

    if (riktig){
        const motorvogn = {
            id: id,
            personnummer : pnr,
            navn : nvn,
            addresse : add,
            kjennetegn : kjt,
            bilmerke : mrk,
            biltype : typ,
        };
        $.post("/endre", motorvogn, function(){

        });
        window.location.href="/"
    }
}