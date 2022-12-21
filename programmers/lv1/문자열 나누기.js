function solution(s) {
    var answer = 0;
    let sourceChar=null; // 비교할 문자
    let life=0; // 자신과 달라도 되는 회수
    
    [...s].map((e) => {
        if (sourceChar){ // 요소와 비교
            if (sourceChar === e) life+=1 
            else {
                life-=1
                if (life === 0) sourceChar=null                
            }
        } else { // sourceChar가 없을 땐 지정
            sourceChar=e;
            answer+=1;
            life+=1;
        }
    })
    
    return answer;
}