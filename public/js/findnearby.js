function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.644, lng: 77.216 },
    zoom: 13,
  });
  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const biasInputElement = document.getElementById("use-location-bias");
  const strictBoundsInputElement = document.getElementById("use-strict-bounds");
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
  };

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

  const autocomplete = new google.maps.places.Autocomplete(input, options);
  console.log(autocomplete);
  //Livelocation

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    console.log(place.geometry.location);
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    // Correct the request to search for e-waste centers
    let request = {
      location: place.geometry.location,
      radius: "25000", // Change this to your desired radius in meters
      keyword: "E-Waste Recycle Hub", // Specify the type for e-waste centers
    };

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });

  let userLocation;
  function currentlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Set the map's center to the user's location.
          console.log(userLocation);
          map.setCenter(userLocation);
          map.setZoom(17);

          // Create a marker at the user's location.
          new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Your Location",
          });
        },
        () => {
          // Handle errors or deny permission.
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      // Geolocation not supported by the browser.
      alert("Geolocation is not supported by your browser.");
    }
  }

  const btn = document.getElementById("current-location");
  btn.addEventListener("click", () => {
    currentlocation();
  });

  function callback(results, status) {
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", function () {
      alert(place.name);
      window.open(place.photos[0].getUrl(), "_blank");
      // infowindow.open(map,this);
    });
  }
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.

  function setupClickListener(id, types) {
    const radioButton = document.getElementById(id);

    radioButton.addEventListener("click", () => {
      autocomplete.setTypes(types);
      input.value = "";
    });
  }

  setupClickListener("changetype-all", []);
  setupClickListener("changetype-address", ["address"]);
  setupClickListener("changetype-establishment", ["establishment"]);
  setupClickListener("changetype-geocode", ["geocode"]);
  setupClickListener("changetype-cities", ["(cities)"]);
  setupClickListener("changetype-regions", ["(regions)"]);
  biasInputElement.addEventListener("change", () => {
    if (biasInputElement.checked) {
      autocomplete.bindTo("bounds", map);
    } else {
      // User wants to turn off location bias, so three things need to happen:
      // 1. Unbind from map
      // 2. Reset the bounds to whole world
      // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
      autocomplete.unbind("bounds");
      autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
      strictBoundsInputElement.checked = biasInputElement.checked;
    }

    input.value = "";
  });
  strictBoundsInputElement.addEventListener("change", () => {
    autocomplete.setOptions({
      strictBounds: strictBoundsInputElement.checked,
    });
    if (strictBoundsInputElement.checked) {
      biasInputElement.checked = strictBoundsInputElement.checked;
      autocomplete.bindTo("bounds", map);
    }

    input.value = "";
  });
}

window.initMap = initMap;
