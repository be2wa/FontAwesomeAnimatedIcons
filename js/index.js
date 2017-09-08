(function() {
    // animation
    function breakChain() {
        const chain = document.getElementById('chain');
        chain.innerHTML = '&#xf0c1;';

        setTimeout(function() {
            chain.innerHTML = '&#xf127;';
        }, 1000);
    }

    // call animation
    breakChain();

    // loop animation
    setInterval(breakChain, 2000);
})();

(function() {
    // animation
    function chargeBattery() {
        const battery = document.getElementById('battery');
        battery.innerHTML = "&#xf244;";

        setTimeout(function() {
            battery.innerHTML = "&#Xf243;";
        }, 1000);

        setTimeout(function() {
            battery.innerHTML = "&#Xf242;";
        }, 2000);

        setTimeout(function() {
            battery.innerHTML = "&#Xf241;";
        }, 3000);

        setTimeout(function() {
            battery.innerHTML = "&#Xf240;";
        }, 4000);
    }

    // call animation
    chargeBattery();

    // loop animation
    setInterval(chargeBattery, 5000);
})();

(function() {
    // animation
    function hourglass() {
        const hourglass = document.getElementById('hourglass');
        hourglass.innerHTML = "&#xf251;";

        setTimeout(function() {
            hourglass.innerHTML = "&#Xf252;";
        }, 1000);

        setTimeout(function() {
            hourglass.innerHTML = "&#Xf253;";
        }, 2000);
    }

    // call animation
    hourglass();

    // loop animation
    setInterval(hourglass, 4000);

    function rotateHourglass() {
        const hourglass = document.getElementById('hourglass');

        setTimeout(function() {
            hourglass.classList.add('rotating');
        }, 3000);

        setTimeout(function() {
            hourglass.classList.remove('rotating');
        }, 4000);
    }

    rotateHourglass();

    setInterval(rotateHourglass, 4000);
})();