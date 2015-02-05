weaver
=======
It's just a simple JavaScript aspect weaver.



## Getting start

With node.js :

```js
var aspectWeaver = require('./weaver');

var myObject = { };
myObject.helloWorld = function(){
  console.log('Hello world !');
}

aspectWeaver.after(myObject, ['helloWorld'], function(req, res) {
    console.log('After !');
});

aspectWeaver.before(myObject, ['helloWorld'], function (req, res) {
    console.log('Before !');
});

myObject.helloWorld(); 
//Print in the console:
//Before !
//Hello wolrd !
//After !
```



## Licence

The MIT License (MIT)

Copyright (c) 2015 Sylvain PONTOREAU (pontoreau.sylvain@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
