function solution(food) {
    var answer = [];
    
    food.forEach((e,idx) => {
            answer = [...answer, ...Array.from({length:Math.floor(e/2)},() => idx) ]
    })
    
    return [...answer,0,...answer.reverse()].join("");
}
