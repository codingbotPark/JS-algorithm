function solution(s) {
    // 인덱스에 맞게 값을 넣어주기 위해 new 키워드 사용
    var answer = new Array(s.length);
    let source = s.split("")
    
    let AssistanceSource = []
    source.map((i,iidx) => {
        if (AssistanceSource.includes(i)){ // 만약 이미 들어왔던 문자라면
            // 배열에서 포함된 요소들을 찾는다
            
            // 인덱스 앞 까지 반복
            for (let j=0;j<iidx;j++){
                if (i === source[j]){
                    answer[iidx] = iidx - j;
                }
            }
           
        } else {
            AssistanceSource.push(i)
            answer[iidx] = -1;
        }
    })
    
    return answer;
}