

export function roll(sides, numDice, rolled) {
var returnArray = [];
var roll; 
    
    for(let i = 0; i < rolled; i++) {
        roll = 0
        for (let j = 0; j < numDice; j++) {
            roll += 1 + Math.floor(Math.random()*sides);
        }
        returnArray.push(roll)
    }

    return {
        'sides': sides,
        'dice': numDice,
        'rolls': rolled,
        'results': returnArray
    }
}