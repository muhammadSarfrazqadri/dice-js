var random_num = Math.random()
var imprve_rndm = (random_num * 7)
var rndm_floor = Math.floor(imprve_rndm)

if (rndm_floor == 0){
    console.log(rndm_floor + 1)
}else if(rndm_floor === 7) {
    console.log(rndm_floor - 1)
}else {
    console.log(rndm_floor)
}