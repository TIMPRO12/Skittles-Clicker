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

    let bgMusic = new Howl({
    src: ['audio/necoarc.mp3'],
    autoplay: true,
    volume: .25,
    loop:   true
    })

let clickerSound = new Howl ({
    src: ["audio/necoarcnya.mp3"]
})

let sourSound = new Howl ({
    src: ("audio/necoarcburunyuu.mp3")
})

let bigbagSound = new Howl ({
    src: ("audio/necoarcdoridori.mp3")
})

let dualbagSound = new Howl ({
    src: ("audio/metalpipe.mp3")
})

let spicybagSound = new Howl ({
    src: ("audio/lick.mp3")
})

function muteMusic() {
    document.getElementById("mutebutton").style.display = "none"
    document.getElementById("playbutton").style.display = "inline-block"
    bgMusic.pause()
}

function playMusic() {
    document.getElementById("playbutton").style.display = "none"
    document.getElementById("mutebutton").style.display = "inline-block"
    bgMusic.play()
}

function increasePoints() {
    clickerSound.play ()
    points += 1 + (buybag * 0.2);
    pointsTracker.innerText = points.toFixed(2) + " Skittles";
}

function purchasebuybag() {
    let cost = 10 + buybag ** 1.3;
    sourSound.play () 
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
    let cost = 50 + buybigbag ** 2.3; 
    bigbagSound.play ()
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
    let cost = 250 + buydualbag * 5.3; 
    dualbagSound.play ()
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
    let cost = 500 + buyspicybag * 10.9; 
    spicybagSound.play ()
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