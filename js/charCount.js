//input: string
// output: report the number of occurrences of a character in a list eg: ["a", 3]. output is list of lists
// strip string of special characters
// string to array of strings
// 

//exports.
charCount = function(inputString) {
    let ansObject = {}
    let ansArray = []
    let strpdString = inputString.replace(/[^a-zA-Z0-9]/g,'')
    
    let strArray = strpdString.split('')
    strArray.sort()
    strArray.forEach(element => {
        //console.log(element)
        if(ansObject.hasOwnProperty(element)){
            ansObject[element] += 1
            //console.log(ansObject)
        } else{
            ansObject[element] = 1
        }
    });
    //return ansObject
    //  ansObject = { '7': 1, a: 3, b: 2, c: 2 }
    // ansArray = [['7', 1],['a',3],['b',2]...etc]
    //console.log(Object.keys(ansObject).length)
    for (let i = 0; i < Object.keys(ansObject).length; i++){
        ansArray.push([Object.keys(ansObject)[i]])
        //console.log(ansArray)
        //for (let j = 0; j < 2; j++){
        ansArray[i].push(Object.values(ansObject)[i])
        //}
        }
        //ansArray.push(Object.keys(ansObject))
    
    return ansArray
};
console.log(charCount("an apple a day will keep the doctor away"))
//result: able to get correct char count to pass the test, however, charCountSpec result #2 looking for it in a different order

