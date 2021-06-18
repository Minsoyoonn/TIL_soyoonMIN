<프로그래머스 level1 : 짝수와 홀수> 
Q : 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

[처음 내가 쓴 답안]

```
def solution(num):
    answer = 'Even'
    remainder_1 = num % 2
    if (remainder_1 == 0):
        print("Even")
    else:
        print("Odd")
    return answer
```
answer = 'Even'을 넣었을때 테스트의 정답률은 50%가 나왔다. 반대로 'Odd'를 넣었을때도 마찬가지다.
뭐가 문제였을까? 
answer는 초기에 입력값에서 더이상 변화하는 부분없다. 따라서 초기 입력값이 끝까지 유지된다.
그리고 실행값은 테스트 된 숫자에 따라 짝수면 even 홀수면 odd 가 출력된다. 
즉, answer 에 입력된 초기값과 숫자에 따라 출력된 값이 일치하면 테스트 통과가 되고, 불일치하면 테스트 실패가 되는 것이므로 아주 방향이 어긋난 코드이다.

해결방식
일단 조건문에 따른 결과값이 answer 함수로 들어가도록 해주어야 한다.
그리고 조건문이 끝난 후 반드시 answer 함수를 출력해주어야 한다. return은 함수를 끝내는 의미이지, 출력을 해주는게 아니다.


[수정해서 통과한 답안]

```
def solution(num):
    answer = 'Even'
    remainder_1 = num % 2
    if (remainder_1 == 0):
        answer = "Even"
    else:
        answer = "Odd"
    return answer
    print (answer)
```

[모범답안]

```
def evenOrOdd(num):
    if (num%2):
        return "Odd"
    else:
        return "Even"

#아래는 테스트로 출력해 보기 위한 코드입니다.
print("결과 : " + evenOrOdd(3))
print("결과 : " + evenOrOdd(2))

```
num%2이 만약 0이라면 if문이 거짓 (bool 에서는 0을 거짓으로 인식)이 되어 even 출력
논리연산자의 정석이 아닌가싶다.
