var google;

function init() {
    // Updated coordinates based on the provided Google Maps link
    var myLatlng = new google.maps.LatLng(14.2978966, 120.9525699);
    
    var mapOptions = {
        zoom: 15, // Set to 15 for a closer zoom level around the specific location
        center: myLatlng,
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Create a marker at the Cavite Tiger Travel & Tours location
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png' // Replace with your preferred marker icon
    });
}

// Load the map when the page is fully loaded
google.maps.event.addDomListener(window, 'load', init);
