/*purpose of the tip calculator function is to 
get the values of sevice type billamount for 
getting the Billamount,Cate,Shareperson from the user and
calculating the stuff and return back the value*/

function Tipcalculator() {

    const Billamount = document.getElementById("bill").value
    const Cate = document.getElementById("tippercent").value
    const Shareperson = document.getElementById("people").value

    if (Billamount === '' || Cate === 0) {
        alert('Please Enter the Amount of Mininim 1');
        return
    }

    if (Shareperson === '' || Shareperson === '0') {
        alert('Please enter the Minium Person of 1')
        return;
    }


    const Tipamount = Cate*Billamount
    document.getElementById("tipamount").value = Tipamount;


    const Totalbill = +Billamount + +Tipamount;
    document.getElementById("totalbillamount").value = Totalbill;

    document.getElementById("person").value = Totalbill / Shareperson;
};

document.getElementById("submit").onclick = function (event) {
    event.preventDefault();
    Tipcalculator();
};

//Here I using the get geolocations for latitude longitude
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
        var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
        });
        google.maps.event.addListener(marker, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });
    });
} else {
    alert('Geo Location feature is not supported in this browser.');
}