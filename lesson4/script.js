const newsText = 
`Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' с 'ковычками aren't'
Привет, 'здесь какой-то текст' с 'ковычками'
Привет, 'здесь какой-то текст' kids's с 'ковычками'`

const repSym = newsText.replace(/(?!s'|[a-z]'[a-z])([\s\S])'|^'/g, '$1"');

console.log(repSym);


