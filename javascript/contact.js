function initMap() {
    var SyntraAB = {lat:51.199152, lng:4.433968};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: SyntraAB
    });
    var marker = new google.maps.Marker({
        position: SyntraAB,
        map: map
    });
}

