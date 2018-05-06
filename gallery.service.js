// import DbService from "./dbService.js"
import dbService from "./dbService.js";
var key = null;

function query(filter = null) {
    return dbService.load(key)
        .then(imgs => {
            console.log('imgs: ', imgs);
            if (filter === null) return imgs;
            // else return imgs.filter(car => car.vendor.toLowerCase().includes(filter.byVendor.toLowerCase()))
        })
}


// function getById(carId) {
//     return storageService.load(KEY)
//         .then(cars => {
//             return cars.find(car => car.id === carId);
//         })
// }

// function deleteCar(carId) {
//     return storageService.load(KEY)
//         .then(cars => {
//             // var carIdx = cars.findIndex(car => car.id === carId);
//             // cars.splice(carIdx, 1);
//             cars = cars.filter(car => car.id !== carId)
//             return storageService.store(KEY, cars);
//         })
// }

// function saveCar(car) {
//     return new Promise((resolve, reject)=>{
//         storageService.load(KEY)
//         .then(cars => {
//             if (car.id) {
//                 var carIdx = cars.findIndex(currCar => currCar.id === car.id)
//                 cars.splice(carIdx, 1, car);
//             } else {
//                 car.id = Date.now();
//                 cars.push(car);
//             }
//             storageService.store(KEY, cars);
//             resolve(car)
//         });
//     });
// }


export default {
    query,
    // getById,
    // deleteCar,
    // saveCar
}

