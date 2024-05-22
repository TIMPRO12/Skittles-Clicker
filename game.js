let points = 0
let pointsTracker = document.getElementById("pointsTracker")
let buybag = 0
let buybagAmmount = document.getElementById("")
let buybigbag = 0
let buybigbagAmmount = document.getElementById("")
    function increasePoints () {
        points = points + 1

        pointsTracker.innerText = points + ' Skittles'
    }
    function buybag() {
        if (points >= 10) 
        points = points - 10
        pointsTracker.innerText = points + " Skittles"
        
    }
    function buybigbag {


    }

     