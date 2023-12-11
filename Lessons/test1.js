let familySize = 4;
let plannedDistanceToDrive = 201;

function recommendedCar(familySize,plannedDistanceToDrive) {

    if (familySize <=4 && plannedDistanceToDrive <200){
        return "Tesla"
    }
    if (familySize <=4 && plannedDistanceToDrive > 200){
        return "Toyota Camry"
    }    
    if (familySize > 4){
        return "Minivan"        
    }

}

console.log(recommendedCar(familySize, plannedDistanceToDrive));