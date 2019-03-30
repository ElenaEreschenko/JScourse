/*Required :point_up:
    Напилите код, выводящий на страницу текущее время в течение 100 секунд

Подсказка: создайте элемент, в котором будет отображаться текущее время

Контент элемента должен обновляться каждую секунду*/

var clock = document.body.appendChild(
    document.createElement('h1')
)
for(var x=0; x<100; x++){
    (function(arg){
        return function(){
            setTimeout(
                ()=>clock.innerText = new Date().toLocaleString().split(', ')[1],
                1000*arg
            )
        }
    })(x)()
}

/*Additionally :ok_hand:
    Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду

var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
    ...
    }
})( 1 )

typeMessage ( `Welcome to the hell` )*/

