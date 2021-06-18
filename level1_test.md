<가운데 글자 가져오기>
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

[처음 작성한 답안]

```
def solution(s):
    answer = 'c'
    lens=len(s) # 문자열 길이 알아내기
    if lens % 2 == 0:
        s =[lens/2]
    else:
        s=[lens/2,(lens/2) +1] # 중간값의 위치 알아내기
                                # 중간값 출력하기
    return answer

```
test 1 : abcde 는 적절하게 'c'가 도출되었는데
test 2 : qwer 는 "실행한 결괏값 "c"이(가) 기댓값 "we"와(과) 다릅니다." 라는 오류가 떴다.

이상하다. qwer에는 c가 없는데 말이다. 
이전 문제에서와 같은 오류를 범했다. 
나의 answer는 초기값 이후에 변한적이 없다. 즉, test 1도 통과는 했지만 맞은게 아니라는 의미다.

[해결방안]
1. 그럼 역시나 그 조건문의 결과값을 answer로 넣어보자.
2. 그리고 위에서 또하나의 오류는 짝수와 홀수일때 결과를 실수로 반대로 적었다.
3. 또한, indexing 개념상 [0:3] 까지면 3 이전까지만 도출된다는 것을 잊지말자.


[수정후 통과한 답안]

```
def solution(s):
    answer = "c"
    lens=len(str(s)) # 문자열 길이 알아내기
    if lens % 2 == 0: ## 중간값의 위치 알아내기
        answer=s[(lens//2)-1:(lens//2) + 1]
    else: 
        answer=s[lens//2]
                                # 중간값 출력하기
    return answer
    
```

[모범답안]

```

def string_middle(str):
    # 함수를 완성하세요

    return str[(len(str)-1)//2:len(str)//2+1]

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print(string_middle("power"))

```
조건문도 안 쓰고 한 줄로 끝내셨다.. 자괴감 든다.
하지만 나도 다음엔 이렇게 적용하도록 생각해야지!
