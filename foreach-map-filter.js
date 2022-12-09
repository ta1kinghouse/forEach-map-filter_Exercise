function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr;
}


function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0) {
        newArr.push(val);
        }
    });
    return newArr;
}


function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(char){
       newArr.push(char[0] + char[char.length-1]);
    });
    return newArr;
}


function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}


function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = 'aeiou';

    splitArr.forEach(function(letter){
        let lowerCaseLetter = letter.toLowerCase()
        if(vowels.indexOf(lowerCaseLetter) !== -1) {
            if(obj[lowerCaseLetter]) {
                obj[lowerCaseLetter]++;
            } else {
                obj[lowerCaseLetter] = 1;
            }
        }
    });
    return obj;
} 


function doubleValuesWithMap(arr) {
    return arr.map(function(value){
        return value * 2;
    });
}


function valTimesIndex(arr){
    return arr.map(function(value, index){
        return value * index;
    });
}

function extractKey(arr, key){
    return arr.map(function(value){
        return value[key];
    });
}


function extractFullName(arr){
    return arr.map(function(value){
        return value.first + " " + value.last;
    });
}


function filterByValue(arr, key) {
   return  arr.filter(function(value){
        return value[key] !== undefined;
    });
}


function find(arr, searchValue) {
   return arr.filter(function(value){
        return value === searchValue;
    }) [0];
}


function findInObj(arr, key, searchValue) {
    return arr.filter(function(value){
        return value[key] === searchValue;
    }) [0];
}


function removeVowels(str) {
    const vowels = 'aeiou';
    return str
        .toLowerCase()
        .split("")
        .filter(function(value){
            return vowels.indexOf(value) === -1;
        })
    .join("");
}


function doubleOddNumbers(arr) {
    return arr
        .filter(function(value){
            return value % 2 !== 0;
        })
        .map(function(value){
            return value *2
        });
 }

