
//year is recieved string
function Car(year, make, model){//...
this.year = parseInt(year) || 0;
this.make = make;
this.model = model;
this.miles = parseInt(miles) || 0;
this.category = cat;
this.MPG = parseInt(mpg) || 0;
this.price = parseFloat(price) || 0.00
this.image = image;
this.isManual = isManual;
}


function register(){
    var year = $("#txtYear").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var miles = $("#txtMiles").val();
    var cat = $("#txtCat").val();
    var color = $("#txtColor").val();
    var mpg = $("#txtMPG").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var isManual = $("#rdbTrans_1").is("checked");

    var car = new Car(year, make, model, miles, cat, color, mpg, price, image, isManual);
    console.log('the car info', car);

    //...

}


function init(){
    console.log("Register Page!!")

    $("#btnSave").click(register);
}

window.onload = init;

