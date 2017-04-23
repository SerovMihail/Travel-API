var wwd = new workWithDom();

// Начало блока тестирования

// result = wwd.findBy("id", "div").addClass('class_name'); // +
// result = wwd.findBy("name", "div").addClass('class_name'); // +
// result = wwd.findBy("class", "div").addClass('class_name'); // +
// result = wwd.findBy("elem", "div").addClass('class_name'); // +
// result = wwd.findBy("allElem", "div").addClass('class_name'); // +

// result = wwd.findBy("id", "div").removeClass('class_name'); // +
// result = wwd.findBy("name", "div").removeClass('class_name'); // +
//result = wwd.findBy("class", "div").removeClass('class_name'); // +
//result = wwd.findBy("elem", "div").removeClass('class_name'); // +
//result = wwd.findBy("allElem", "div").removeClass('class_name'); // +

//result = wwd.findBy("id", "div").getCSS("background-color"); // +
 //result = wwd.findBy("name", "div").getCSS("background-color"); // +
//result = wwd.findBy("class", "div").getCSS("background-color"); // +
// result = wwd.findBy("elem", "div").getCSS("background-color"); // +
// result = wwd.findBy("allElem", "div").getCSS("background-color"); // +

//result = wwd.findBy("id", "div").setCSS("background-color", "black"); // +
//  result = wwd.findBy("name", "div").setCSS("background-color", "black"); // +
// result = wwd.findBy("class", "div").setCSS("background-color" , "black"); // +
// result = wwd.findBy("elem", "div").setCSS("background-color", "black"); // +
//  result = wwd.findBy("allElem", "div").setCSS("background-color", "black"); // +

//result = wwd.findBy("name", "changeMe").addClass('col-md-4').setCSS('height', '300px');

// result = wwd.findBy("id", "red").setCSS('background-color', 'red');
// result = wwd.findBy("id", "blue").setCSS('background-color', 'blue');
// result = wwd.findBy("id", "yellow").setCSS('background-color', 'yellow');

// Конец блока тестирования

// Задаю стили для index.html
wwd.findBy('tag', 'h1').addClass('text-center');

wwd.findByX('div[1]/div[1]').addClass('col-md-4').setCSS('height', '300px').setCSS('background-color', 'red');
wwd.findByX('div[1]/div[2]').addClass('col-md-4').setCSS('height', '300px').setCSS('background-color', 'blue');
wwd.findByX('div[1]/div[3]').addClass('col-md-4').setCSS('height', '300px').setCSS('background-color', 'yellow');

wwd.findByX('div[2]').setCSS('margin', '50px');
wwd.findByX('div[2]/h3').addClass('alert alert-success');
wwd.findBy('elem', 'div').addClass('row');

wwd.findBy('allElem', 'li').addClass('list-group-item');
wwd.findByX('div[2]/div[1]').addClass('panel panel-default');
wwd.findByX('div[2]/div[1]/div[1]').addClass('panel-heading');
wwd.findByX('div[2]/div[1]/div[1]/h3').addClass('panel-title');
wwd.findByX('div[2]/div[1]/div[2]').addClass('panel-body');
wwd.findBy('class', 'panel-body').setCSS('padding', '0px');