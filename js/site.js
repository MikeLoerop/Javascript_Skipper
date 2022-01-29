


function bubbleTeaInit(){
    let bubbleTeaValues = [];
    let results = [];



    bubbleTeaValues = getValues();
    let validation = validateValues(bubbleTeaValues);

    if(validation === true){
        results = generateResults(bubbleTeaValues);

        displayResults(results);

    }else{
        alert("All values must be integers");
    }

}

//Gets the values from the front-end
function getValues () {
    let bubbleValue = document.getElementById("bubbleValue").value;
    let teaValue = document.getElementById("teaValue").value;
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Parse inputs into integers
    bubbleValue = parseInt(bubbleValue);
    teaValue = parseInt(teaValue);
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    let bubbleTeaValues = [];
    bubbleTeaValues[0] = bubbleValue;
    bubbleTeaValues[1] = teaValue;
    bubbleTeaValues[2] = startValue;
    bubbleTeaValues[3] = endValue;

    return bubbleTeaValues;
    
}

//Checks whether the numbers are truly integers.
function validateValues(bubbleTeaValues){
    let intCheck = true;

    //Did the user enter integers?
    for(let i = 0; i< bubbleTeaValues.length; i++ ){
        if(!(Number.isInteger(bubbleTeaValues[i]))){
            intCheck = false;
        }
    }

    return intCheck;  
}



//Generate numbers from startValue to endValue
function generateResults(bubbleTeaValues){
    let bubbleValue = bubbleTeaValues[0];
    let teaValue = bubbleTeaValues[1];
    let startValue = bubbleTeaValues[2];
    let endValue = bubbleTeaValues[3];
    let results = [];

    //If the user put the numbers in the wrong order, swap it for them instead of throwing an error.
    if(startValue > endValue){
        let num = startValue;
        startValue = endValue;
        endValue = num;
    }

    //loop through values between Bubble and Tea
    for (let i = startValue; i <= endValue; i++) {
        //Is the number divisible by 'Bubble'
        if(i % bubbleValue == 0){
            //If so, check whether it's also divisble by 'Tea.' Else, just add "Bubble" to the list.
            if(i % teaValue == 0){
                results.push("BubbleTea");
            }else{
                results.push("Bubble");
            }
        //Is the number divisible by 'Tea' only?
        }else if(i % teaValue == 0){
            results.push("Tea");
        //If not divisible by either, just add the number to the list.
        }else{
            results.push(i);
        }
    }
    return results;
}

//Display the numbers and mark the even numbers bold
function displayResults(results) {
    let templateRow = "";
    
    for (let i = 0; i < results.length; i++) {
        let result = results[i];
        templateRow += `<tr><td>${result}</td><tr>`;
                
    }

    document.getElementById("results").innerHTML = templateRow;
}