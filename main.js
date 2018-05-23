let incrementer = 0

const addNum = function(bandName){
    console.log(`${incrementer+1}. ${bandName}`)
    incrementer++
    return incrementer
}
for (let i = 0; i < 5; i++){
    let bandName = prompt("Band Name?")
    addNum(bandName)
}