/** 
 * 모든 날짜를 숫자로 치환해서 생각 
 * 2000년대부터 시작하기 때문에 년에서 2000을 빼기,
 * 한 달을 28일로 가정하기 때문에 달 = 28
 * 날짜 = 그대로 날짜
 * 구한 날짜 값들 중 작거나 같으면 idx+1를 넣기
 * */
function solution(today, terms, privacies) {
    var answer = [];

    // 객체를 사용해서 빠르게 찾고, 28 이 곱해진 값을 바로 가져올 수 있다
    const termsObj = {}
    terms.forEach(e => {
        const termArr = e.split(" ")
        termsObj[termArr[0]] = termArr[1] * 28
    });
    const todayNum = convertToNumber(today)

    privacies.forEach((e,idx) => {
        const privacieArr = e.split(" ")
        const value = convertToNumber(privacieArr[0]) + termsObj[privacieArr[1]]
        if (value <= todayNum) answer.push(idx+1)
    })

    return answer;
}

/** 숫자 바꿔주기 */
function convertToNumber(str){
    let num = str.split(".")
    num = 
    ((Number(num[0])-2000) * 336) +
    Number(num[1]) * 28 + 
    Number(num[2])
    return num
}
