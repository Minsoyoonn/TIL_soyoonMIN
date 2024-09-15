# k번째 수
>>배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
>>예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
>>array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
>>1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
>>2에서 나온 배열의 3번째 숫자는 5입니다.
>>배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

array	                 commands	                            return
[1, 5, 2, 6, 3, 7, 4]	  [[2, 5, 3], [4, 4, 1], [1, 7, 3]]   [5, 6, 3]

[통과한 답안]
```
def solution(array, commands):
    arr2=[]
    for i in range(len(commands)):
        arr1=array[commands[i][0]-1:commands[i][1]]
        arr1=sorted(arr1)
        arr2.append(arr1[commands[i][2]-1])
    answer = arr2
    return answer
    
```
- 앞에서 공부한 이중리스트 호출을 연습하기 좋은 문제였다. 이젠 이 유형에 쫄지말자
- 인덱스값의 도출에 늘 신경쓰자!!


[다른사람의 풀이]

```
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
```
>> lambda 함수 설정을 공부했는데 써먹질 못하니... 
