function solution(k, score) {
    var answer = [];
    let stack = []
    
    score.forEach((i) => {
        let index = stack.findIndex((e) => e<i)
        
        if (index === -1) {
            if (stack.length <= k) index = stack.length // 만약 3보다 작다면 마지막에 추가 
            //else return 
        }
        stack.splice(index,0,i)
        if (stack.length > k) stack.pop()
        answer.push(stack.at(-1))
    })
    
    return answer;
}