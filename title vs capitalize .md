# title vs capitalize
## title
- 문장 모든 단어의 첫 글자를 대문자로 바꿈
- title은 문자열에서 알파벳 외의 문자(숫자, 특수기호, 띄어쓰기 등)들을 기준으로 첫 글자를 대문자로 바꾼다.
## capitalize
- 문장의 첫 단어의 첫 글자만 대문자로 바꿈

### ex>
s = "hello world, i'm soyoon min"
print(s.title())        #result : 'Hello World, I'm Soyoon Min'
print(s.capitalize())   #result : 'Hello world, i'm soyoon min'


s = "a1b2c3"
print(s.title())        #result : 'A1B2C3'
print(s.capitalize())   #result : 'A1b2c3'


s = "abc-def gh"
print(s.title())        #result : 'Abc-Def Gh
print(s.capitalize())   #result : 'Abc-def gh'
