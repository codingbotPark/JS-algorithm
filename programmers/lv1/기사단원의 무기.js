/**
 *
 * @param {기사단원의 수} number
 * @param {공격력 제한수치} limit
 * @param {제한 됐을 때의 power} power
 * @returns
 */
function solution(number, limit, power) {
  // 1을 어차피 한 개이므로 기본적 추가
  var answer = [1];

  for (let i = 2; i <= number; i++) {answer.push(getDivisorNumber(i))}

  return answer.reduce((sum,curValue) => {
    if (curValue > limit){
        return sum + power
    } else {
        return sum + curValue
    }
  },0)
}

function getDivisorNumber(num) {
  let counter = 0;
  for (let j = 1; j <= num/2; j++) {
    if (!(num % j)) {
      counter++;
    }
  }
  // 자기자신을 포함시켜준다
  return counter + 1;
}

console.log(solution(10, 3, 2))
