document.getElementById('velocity')
    .addEventListener('change', updateVelocity, false);

document.getElementById('logoSize')
    .addEventListener('change', updateSize, false);


function updateVelocity(){
    document.getElementById("status").innerHTML = "Velocity change..";
    var value = document.getElementById('velocity').value;
    
    var range = (100 - 1);
    var newRange = (10 - 0.1);
    var newValue = (((value - 1) * newRange) / range) + 0.1;
    console.log(newValue);
    speedRatio = newValue;
}

function updateSize(){
    document.getElementById("status").innerHTML = "Size change..";
    var value = document.getElementById('logoSize').value;

    var range = (100 - 1);
    var newRange = (3 - 0.01);
    var newValue = (((value - 1) * newRange) / range) + 0.01;
    console.log(newValue);
    logoSize = newValue;

}

function addDvdLogo(){
    document.getElementById("status").innerHTML = "Add DVD pressed! That s epic";
    dvdQuantity++;
    generateDvdLogo();
    document.getElementById("dvdInstances").innerHTML = dvdQuantity;
}

$('input[name=collide]').change(function(){
    if($(this).is(':checked')) {
        document.getElementById("status").innerHTML = "Collision enabled..";
    } else {
        document.getElementById("status").innerHTML = "Collision disabled..";
    }
});