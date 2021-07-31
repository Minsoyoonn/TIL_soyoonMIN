# 소수찾기
##각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.


입출력     예
numbers	return
"17"	    3
"011"   	2


[통과한 답안]
```
import math
from itertools import permutations

def isprimenumber(n): # 소수인지 판별하는 함수 만들기
    if n==0 or n==1:
        return False
    else:
        for i in range(2, int(math.sqrt(n))+1):
            if n % i == 0:
                return False
        return True

def solution(numbers):
    answer = []
    for i in range(1,len(numbers)+1):
        arr=list(permutations(numbers,i)) # 순열을 이용해 하나씩 묶기
        for j in range(len(arr)):
            num = int(''.join(map(str,arr[j])))
            if isprimenumber(num):
                answer.append(num)
    answer=list(set(answer))
    return len(answer) 
 ```
 
 
 - 소수인지를 판단하는 함수를 만든다
 - 그 다음 순열로 조합하여 숫자를 만들고 위에 함수를 통해 숫자가 소수에 해당하는 판별
 - 개수 리턴
