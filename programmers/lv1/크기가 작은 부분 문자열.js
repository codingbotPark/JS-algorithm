function solution(t, p) {
    var answer = 0;
    
    const NumP = Number(p)
    const pLength = p.length
    // 만약 p가 1일 땐 그냥 하나도 안 빼야하고,
    // 2이상이면 pLength - 1 을 t.length에 빼야한다
    for (let i = 0 ; i<(t.length - (pLength-1)) ; i++){
        if (Number(t.substring(i,i+pLength)) <= NumP){
            answer++
        }
    }
    
    return answer;
}