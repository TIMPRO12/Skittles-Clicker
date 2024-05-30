let points = 0;
let pointsTracker = document.getElementById("pointsTracker");
let buybag = 0;
let buybagAmmount = document.getElementById("Bag");
let buybigbag = 0;
let buybigbagAmmount = document.getElementById("BigBag");
let buydualbag = 0;
let buydualbagAmmount = document.getElementById("DualBag");
let buyspicybag = 0;
let buyspicybagAmmount = document.getElementById("SpicyBag");
let cps = 0;
let cpsAmmount = document.getElementById("cps");

function increasePoints() {
    points += 1 + (buybag * 0.2);
    pointsTracker.innerText = points.toFixed(2) + " Skittles";
}

function purchasebuybag() {
    let cost = 10 + buybag * 10; 
    if (points >= cost) {
        points -= cost;
        pointsTracker.innerText = points.toFixed(2) + " Skittles";
        buybag++;
        buybagAmmount.innerText = buybag + " Sour Skittles Owned";
        bagCost.innerText = cost.toFixed(2);
    } else {
        alert("Not enough skittles! You need at least " + cost.toFixed(2) + " skittles to buy a Bag");
    }
    updateButtons();
}

function purchasebuybigbag() {
    let cost = 50 + buybigbag * 25; 
    if (points >= cost) {
        points -= cost;
        pointsTracker.innerText = points.toFixed(2) + " Skittles";
        buybigbag++;
        buybigbagAmmount.innerText = buybigbag + " Big Bags Owned";
        bigbagCost.innerText = cost.toFixed(2);
    } else {
        alert("Not enough skittles! You need at least " + cost.toFixed(2) + " skittles to buy Big Bags");
    }
    updateButtons();
}

function purchasebuydualbag() {
    let cost = 250 + buydualbag * 50; 
    if (points >= cost) {
        points -= cost;
        pointsTracker.innerText = points.toFixed(2) + " Skittles";
        buydualbag++;
        buydualbagAmmount.innerText = buydualbag + " Dual Bags Owned";
        dualbagCost.innerText = cost.toFixed(2);
    } else {
        alert("Not enough skittles! You need at least " + cost.toFixed(2) + " skittles to buy Dual Bags");
    }
    updateButtons();
}

function purchasebuyspicybag() {
    let cost = 500 + buyspicybag * 100; 
    if (points >= cost) {
        points -= cost;
        pointsTracker.innerText = points.toFixed(2) + " Skittles";
        buyspicybag++;
        buyspicybagAmmount.innerText = buyspicybag + " Spicy Bags Owned";
        spicybagCost.innerText = cost.toFixed(2);
    } else {
        alert("Not enough skittles! You need at least " + cost.toFixed(2) + " skittles to buy Spicy Bags");
    }
    updateButtons();
}

function updatePoints() {
    pointsTracker.innerText = points.toFixed(2) + " Skittles";
}

function updateButtons() {
    document.getElementById("buybagBtn").disabled = points < 10;
    document.getElementById("buybigbagBtn").disabled = points < 50;
    document.getElementById("buydualbagBtn").disabled = points < 250;
    document.getElementById("buyspicybagBtn").disabled = points < 500;
}

function gameLoop() {
    points += (1 * buybag) + (5 * buybigbag) + (10 * buydualbag);
    cps = (1 * buybag) + (5 * buydualbag) + (10 * buyspicybag);
    cpsAmmount.innerText = cps + " Skittles per second";
    updatePoints();
}

setInterval(gameLoop, 1000);


updateButtons();