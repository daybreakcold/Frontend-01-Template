# 本周作业

> 写一个正则表达式 匹配所有 Number 直接量
```
  const reg = /^-?\d+$|^(-?\d+)(\.\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/g;
  // Number包括: 整数、浮点数、二进制数、八进制数、十六进制数
```

> 写一个 UTF-8 Encoding 的函数

```
function encodingStr(str){
   return str.split('').map((s) => `\\u${s.codepointAt().tostring(16)}`)
}
```
> 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```
const reg = /[\u0021-\u007E]{6,16}|[\x21-\x7E]{6,16}|(['"])(?:(?!\1).)*?\1/g;
```