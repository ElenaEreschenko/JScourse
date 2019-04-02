/*
Required :point_up:
Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    ...
}

typeMessage ( `Welcome to the hell`, 1 )
 */

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    message.split('').forEach(
        (item, index) => setTimeout(
            () => container.textContent += item,
            1000* index * velocity
        )
    )
}

typeMessage ( `Welcome to the hell`, 1 )

/*
Additionally :ok_hand:
Напилите код методов setUserPresent, showPresent и showAbsent

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                ...
            },
            showPresent () {
                ...
            },
            showAbsent () {
                ...
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()
После запуска кода результат в консоли должен быть таким:

Иван
Дмитрий
Степан
Михаил
а после выполнения кода:

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
результат в консоли должен быть таким:

Иван
Степан
Михаил
 */

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })
        return {
            setUserPresent ( userName, present ) {
                let user = users.find(
                    item => item.name === userName
                )
                user ? user.present = present : null
            },
            showPresent () {
                return users.filter(item => item.present)
                    .map(user => user.name)
            },
            showAbsent () {
                return users.filter(item => !item.present)
                    .map(user => user.name)
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()



users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()

/*
Additionally :thumbsup:
Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса,
а затем меняет атрибуты стиля этого класса

let changeClass = ( classname, styleString ) => (
   ...
).length > 0 ? console.log ( "found" ) :
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

После вызова функции:
changeClass ( "second-level-menu", "background-color: red!important;" )
в консоли страницы, где есть элементы с классом second-level-menu,
у всех элементов этого класса цвет фона должен измениться на красный
 */


