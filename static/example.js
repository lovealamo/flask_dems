'use strict';
/*****
console.log("Jquery版本："+$.fn.jquery);
console.log("hello");
console.log(window.jQuery);
console.log(window.$);
if (window.jQuery === window.$)
{
    console.log("window.jQuery===window.$");
}
else
{
    console.log("window.jQuery!=window.$");
}

console.log(window.jQuery===window.$);
console.log($);
****/
var p_js=$('p#para-1');
console.log(p_js.get(0));
var erlang=$('p.color-red');
console.log(erlang.get(0));
var p_erlang_js=$('#para-1.color-red','#para-2.color-red color-green');
console.log(p_erlang_js.get[0],p_erlang_js.get(1));
var all = $('p[class=';
color - red;
color - green;
']';
)
console.log(all.length);