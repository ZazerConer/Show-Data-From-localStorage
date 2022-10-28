/* Source Code JS: https://github.com/ZazerConer/Show-Data-From-localStorage/blob/main/source/js/script.js */
/* License MIT: https://github.com/ZazerConer/Show-Data-From-localStorage/blob/main/LICENSE */

/*-- Create console box on div --*/

if (typeof console != "undefined")
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};
console.log = function(message) {
    console.olog(message);
    $('#showData').append('<p>->&nbsp; ' + message + '</p>');
};

console.error = console.debug = console.info = console.log

/*-- Show all data from localStorage --*/

var _lsTotal = 0,
    _xLen, _x;
for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
};

console.log("Total Used = " + (_lsTotal / 1024).toFixed(2) + " KB");

/*-- Button (Delete data from localStorage + Refresh page) --*/

// Remove all data.
function deleteItem() {
    let data = localStorage.clear();
    alert("All data has been removed.");
}
// Refresh page.
$(document).ready(function() {
    $("#delete").click(function() {
        window.location = window.location.pathname;
    });
});

/*-- Preview text (PrivacyPolicy) --*/

function preview() { // Button preview.
    var PrivacyPolicy = document.getElementById("PrivacyPolicy").value; // Preview text.
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    document.getElementById("textPreview").innerHTML = PrivacyPolicy.replace(exp, "<a href='$1'>$1</a>");
    document.getElementById("PrivacyPolicy").style.display = 'none';
    document.getElementById("textPreview").style.display = 'inline-block';
    document.getElementById("close").style.display = 'inline-block';
    document.getElementById("preBtn").style.display = 'none';
    document.getElementById("wrap-container").style.display = 'none';
    return true;
}
$("#close").click(function() { // Button close.
    document.getElementById("PrivacyPolicy").style.display = 'inline-block';
    document.getElementById("textPreview").style.display = 'none';
    document.getElementById("close").style.display = 'none';
    document.getElementById("preBtn").style.display = 'inline-block';
    document.getElementById("wrap-container").style.display = 'inline-block';
});
