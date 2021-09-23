let golds = 0;
let gps = 0;
let minions = [
    { id: 1, name: "Slime", cost: 10, gps: 0.1, owned: 0 },
    { id: 2, name: "Undead", cost: 100, gps: 1, owned: 0 },
    { id: 3, name: "Imp", cost: 500, gps: 5, owned: 0 }
];

function displayGolds() {
    document.getElementById("gold").innerHTML= golds;
}

function addGold(x) {
    golds = golds + x;
    displayGolds();
}

function displayGPS() {
    document.getElementById("gps").innerHTML= gps;
}

function getGPS() {
    gps = 0;
    minions.forEach(minion => {
	gps += minion.gps * minion.owned;
    });
    displayGPS();
}


function buySlime() {
    if (golds >= minions[0]['cost']) {
	golds = golds - minions[0]['cost'];
	minions[0]['owned']++;
	minions[0]['cost'] = minions[0]['cost'] * 1.15;
	document.getElementById("slime_cost").innerHTML= minions[0]['cost'];
    }
}

function buyUndead() {
    if (golds >= minions[1]['cost']) {
        golds = golds - minions[1]['cost'];
	minions[1]['owned']++;
	minions[0]['cost'] = minions[1]['cost'] * 1.15;
	document.getElementById("undead_cost").innerHTML= minions[1]['cost'];
    }
}

function buyImp() {
    if (golds >= minions[2]['cost']) {
	golds = golds - minions[2]['cost'];
	minions[2]['owned']++;
	minions[0]['cost'] = minions[2]['cost'] * 1.15;
	document.getElementById("imp_cost").innerHTML= minions[2]['cost'];
    }
}

function init() {

    document.getElementById("slime_cost").innerHTML= minions[0]['cost'];
    document.getElementById("undead_cost").innerHTML= minions[1]['cost'];
    document.getElementById("imp_cost").innerHTML= minions[2]['cost'];
    function f() {
	getGPS();
	addGold(gps);
	displayGPS();
    }

    setInterval(f, 1000);
}
init();
