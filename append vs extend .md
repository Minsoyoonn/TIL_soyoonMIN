# append vs. extend
## append
- list.append(추가할 요소)
- 리스트 마지막에 추가할 요소를 삽입

## extend
- list.extend(추가할 요소 여러개)
- 리스트 마지막에 가장 바깥쪽 iterable의 모든 항목을 삽입

### ex1> y가 리스트일때

x = [min, so, yoon]
y = [yoon, so, min]

x.append(y)
= [min, so, yoon, [yoon, so, min]]

x.extend(y)
= [min, so, yoon, yoon, so, min]

### ex2> y가 문자열일때
x = [min, so, yoon]
y = 'yoon so min'

x.append(y)
= [min, so, yoon, 'yoon so min']

x. extend(y)
=[min, so, yoon, 'y','o','o','n','s','o','m','i','n']
