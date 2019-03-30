/*Обязательное задание ( 3 балла )
:warning: pure JS

Создайте элемент 'p', при клике на котором появляется картинка размером 100px

При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px

При клике на картинке она должна исчезать*/

var p = document.body.appendChild(document.createElement('p'))
p.innerText = 'Nazmi tyt'
p.style = `background-color:yellow; width: 200px;`
var image = document.body.appendChild(document.createElement('img'))
image.src = 'https://picsum.photos/200/200/?random'
image.style = `display:none; transition: all 1s`

p.onclick = function(event){
    image.style.display = 'block',
        image.style.width = '100px'
},
    image.onmouseover = function(event){
        image.style.width = '200px'
    },
    image.onclick = function(event){
        image.style.display = 'none'
    }

/*
Дополнительно ( 4 балла )
Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout

var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель

Установите значение #ff00ff50 атрибута background-color каждому элементу

Установите значение dotted 1px yellow; атрибута border каждому элементу

При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050

При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение

При наступлении события click элемент должен быть удален

При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" )
*/

var collection = [];

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.children.length ? event.target.parentElement.appendChild(event.target.children[0]): null,
    event.target.remove()
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        index === 0 ?
            (elem = document.body.appendChild(document.createElement('div')),
                elem.style = `
    		background-color: #ff00ff50;
    		border: dotted 1px yellow;
    		width: ${elem.parentElement.offsetWidth - 50}px;
    		height: ${elem.parentElement.offsetHeight - 50}px;
		`)
            : (elem = document.getElementById(arr[index - 1])
                .appendChild(document.createElement('div')),
                elem.style = `
    		background-color: #ff00ff50;
    		border: dotted 1px yellow;
   			width: ${elem.parentElement.offsetWidth - 50}px;
    		height: ${elem.parentElement.offsetHeight - 50}px;
		`)
        elem.id = elem.title = tag
        elem.addEventListener ('mouseover', over )
        elem.addEventListener('mouseout', out)
        elem.addEventListener('click',clickHandler)
        collection.push(elem)
    },collection
)

/*Условия предыдущего задания изменить так:

var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
:warning: при удалении элемента его потомки должны оставаться*/

var collection = []

function enter ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function leave ( event ) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.children.length ?
        event.target.parentElement.appendChild(event.target.children[0]): null
    event.target.remove()
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    function ( tag, index, arr  ) {
        index === 0 ?
            (elem = document.body.appendChild(document.createElement('div')),
                elem.style = `
   			background-color: #ff00ff50;
    		border: dotted 1px yellow;
    		width: ${elem.parentElement.offsetWidth - 50}px;
    		height: ${elem.parentElement.offsetHeight - 50}px;
		`)
            : (elem = document.getElementById(arr[index - 1]).appendChild(document.createElement('div')),
                elem.style = `
    		background-color: #ff00ff50;
    		border: dotted 1px yellow;
    		width: ${elem.parentElement.offsetWidth - 50}px;
    		height: ${elem.parentElement.offsetHeight - 50}px;
		`)
        elem.id = elem.title = tag
        elem.addEventListener ('mouseover', enter )
        elem.addEventListener('mouseout', leave)
        elem.addEventListener('click',clickHandler);
        collection.push(elem)
    },collection
)