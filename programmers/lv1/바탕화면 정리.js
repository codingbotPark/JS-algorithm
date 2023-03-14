// 다 돌면서 변수값을 초기화시키며 답을 찾는다
function solution(wallpaper) {
    // y,x,y,x
    var answer = Array.from({length:4});

    // 4가지 값이 필요하다
    // 시작하는 x,y 끝나는 x,y
    wallpaper.forEach((i,idx) => {
        i.split("").forEach((j,jdx) => {
            if (j === "#"){
                if (answer[0] === undefined){
                    answer[0] = idx
                    answer[1] = jdx
                    answer[3] = jdx+1
                } 
                if (answer[1] > jdx){
                    answer[1] = jdx
                }
                if (answer[3] < jdx + 1){
                    answer[3] = jdx + 1
                }

                console.log(i,answer[3],jdx+1)
    
                answer[2] = idx + 1
            }
        })
    })

    return answer;
}

console.log(solution(	["..........", ".....#....", "......##..", "...##.....", "....#....."]))
