let points = 0
let pointsTracker = document.getElementById("pointsTracker")
let buybag = 0
let buybagAmmount = document.getElementById("Bag")
let buybigbag = 0
let buybigbagAmmount = document.getElementById("BigBag")
let buydualbag = 0
let buydualbagAmmount = document.getElementById("DualBag")
let buyspicybag = 0
let buyspicybagAmmount = document.getElementById("SpicyBag")
let cps = 0
let cpsAmmount = document.getElementById("cps")
let bagCost = document.getElementById("bagcost")
let bigbagCost = document.getElementById("bigbagcost")
let dualbagCost = document.getElementById("dualbagcost")
let spicybagCost = document.getElementById("spicybagcost")

function increasePoints() {
    points = points + 1 + (buybag * .2)
    pointsTracker.innerText = points.toFixed(2) + " Skittles"
}
function purchasebuybag() {
    let cost = 10 + buybag ** 1.5
    if (points >= 10) {
        points = points - 10
        pointsTracker.innerText = points.toFixed(2) + " Skittles"
        buybag = buybag + 1
        buybagAmmount.innerText = buybag + " Bags Owned"
        bagCost.innerText = cost = 10 + buybag ** 1.5
    } else {
        alert("Not enough skittles! You need at least 10 skittles to buy a Bag")
    }
}
function purchasebuybigbag() {
    if (points >= 50) {
        points = points - 50
        pointsTracker.innerText = points.toFixed(2) + " Skittles"
        buybigbag = buybigbag + 1
        buybigbagAmmount.innerText = buybigbag + " Big Bags Owned"
        bigbagCost.innerText = cost = 10 + bigbag ** 1.5
    } else {
        alert("Not enough skittles! You need at least 50 skittles to buy Big Bags")
    }
}
function purchasebuydualbag() {
    if (points >= 250) {
        points = points - 250
        pointsTracker.innerText = points.toFixed(2) + " Dual Bag"
        buydualbag = buydualbag + 1
        buydualbagAmmount.innerText = buydualbag + " Dual Bags Owned"
        dualbagCost.innerText = cost = 10 + dualbag ** 1.5
    } else {
        alert("Not enough skittles! You need at least 250 skittles to buy Dual Bags")
    }
}
function purchasebuyspicybag() {
    if (points >= 500) {
        points = points - 500
        pointsTracker.innerText = points.toFixed(2) + " Skittles"
        buyspicybag = buyspicybag + 1
        buyspicybagAmmount.innerText = buyspicybag + " Spicy Bag Owned"
        spicybagCost.innerText = cost = 10 + spicybag ** 1.5
    } else {
        alert("Not enough skittles! You need at least 500 skittles to buy Spicy Bags")
    }
}



function gameLoop() {
let buybag = 0
    points = points + (1 * buybag) + (5 * buybigbag) + (10 * buydualbag)
    cps = (1 * buybag) + (5 * buydualbag) + (10 * buyspicybag)
    pointsTracker.innerText = points.toFixed(2) + " Skittles"
    cpsAmmount.innerText = cps + " Skittles per second"
}
setInterval(gameLoop, 1000)