function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b) => b-a);
    
    // k를 넘는 사과를 없애고, 추가
    const overLength = score.lastIndexOf(k)+1
    score = Array.from({length:overLength},() => k).concat(score.slice(overLength))
    
    for (let i = 0;i<Math.floor(score.length / m) * m;i+=m){
        const temp = (score.slice(i,i+m).at(-1)) * m
        answer += temp
    }
    
    return answer;
}