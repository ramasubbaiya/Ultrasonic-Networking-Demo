function getCurrentPositionWithPromise() {
    return new Promise(function(fulfill, reject) {
        navigator.geolocation.getCurrentPosition(fulfill, reject)
    });
}


async function main() {
    try {
        // get the co-ordinates
        var position = await getCurrentPositionWithPromise();
        console.log(position.coords);
        var catLat = 44.341755;
        var catLong = -79.649426;

        var distance = getDistance(position.coords.latitude, position.coords.longitude, catLat, catLong);

        // check the distance, 1500 in meters
        if (distance <= 1500) {
            console.log("%cI am near the store, Button Appears", "background: green; color: yellow; font-size: x-large");
        } else {

            console.log("%cOh man!, you are " + Math.round(distance / 1000) + "Kms far. Close the App", "background: red; color: yellow; font-size: x-large");
            // var ALPHABET = ' abcdefghijklmnopqrstuvwxyz';
            // var MESSAGE = 'abc';
            // var button = document.querySelector('#message');
            // button.addEventListener('click', onButton);

            // function onButton() {
            //     socket = new Sonicnet.SonicSocket({
            //         alphabet: ALPHABET,
            //         charDuration: 0.2
            //     });
            //     socket.send(MESSAGE);
            // }

            // socket = new Sonicnet.SonicSocket({
            //     alphabet: ALPHABET,
            //     charDuration: 0.2
            // });
            // socket.send(MESSAGE)
            //     // On some other machine:
            // server = new Sonicnet.SonicServer({
            //     alphabet: ALPHABET
            // });
            // server.on('message', function(message) {
            //     // message is '31415'. Do something with it.
            //     console.log(message);
            // });
            // server.start();
        }




    } catch (e) {
        console.error(e.message);
    }
}

main();

function getDistance(fromLat, fromLong, toLat, toLong) {
    var radiusInKilometer = 6371;
    var radiusInMeter = radiusInKilometer * 1000;

    var dLat = deg2rad(toLat - fromLat);
    var dLong = deg2rad(toLong - fromLong);

    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(fromLat)) * Math.cos(deg2rad(toLat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);

    var angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = radiusInMeter * angle;
    return distance;
}

function deg2rad(degree) {
    return degree * (Math.PI / 180);
}

// var ALPHABET = ' 12jklmnopqrstuvwxyz';
// // Create an ultranet server.
// var sonicServer = new SonicServer({ alphabet: ALPHABET, debug: true });


// console.log(sonicServer.send('31415'));