# 프로그래머스 level2 JadenCase
## 
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

## 제한 조건
- s는 길이 1 이상인 문자열입니다.
- s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

## 입출력 예
(s, return) = ("3people unFollowed me" ,	"3people Unfollowed Me") ,("for the last week",	"For The Last Week")

## 통과한 답안
```
def solution(s):
    answer = ''
    s3=[]
    s1=s.lower() # 모두 소문자로 바꾸기 => 지워도 됨!
    s2=s1.split(" ")
    for i in s2:
        s3.append(i.capitalize()) # split 통해 쪼개기
    answer= " ".join(s3)
    
    return answer

```
- 코드 중 첫 단계를 일단 모두 소문자로 바꾸고 시작하는 s1=s.lower()를 썼다. 그러나 알고보니 capitalize() 함수는 첫 글자를 대문자로 바꿔주는 기능뿐 아니라, 
  그 외를 모두 소문자로 바꾸는 기능도 같이 갖고 있어 의미 없는 코드였다.
- 어렵지 않은 문제였다.
