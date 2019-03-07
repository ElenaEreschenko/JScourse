/*Обязательная часть ( 3 балла )
Создайте объект, свойства которого описывают содержимое дамской сумочки

Создайте метод объекта, позволяющий удалить что-то из сумочки

Создайте метод объекта, позволяющий положить что-то в сумочку
*/

var Bag = {
    documents: "Паспорт",
    gadgets: "Phone",
    pills: "Немисил",
    accessories: "Ключи",
    money: 300,
    deliteObject: function (thing){
        delete Bag[thing];
    },
    addAtribute: function(newattribute, somevalue){
        Bag[newattribute] = somevalue;
    }
}
Bag.deliteObject('pills')
console.log(Bag)
Bag.addAtribute('doc','pas')
console.log(Bag)

/*
Дополнительно ( 4 балла )
Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

📦 Приватные свойства объекта:
    🔑 title ( название книги ),
    🔑 year ( год издания ),
    🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
    🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
        внесение изменений в свойства:
            🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию о наличии книги
       ( вывести в консоль readerData )
    📋 getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки
       ( приватное свойство readerName
         должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод
       giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
       сбросить значения приватных свойств
       readerName, readerData
Создайте экземпляр книги
Запросите экземпляр от имени ... ( любое имя )
 */

var LibraryBook = function ( _title = "Без названия", _year = "нет данных", _author = "нет данных" ) {
    var title = _title
    var year = _year
    var author = _author
    var readerName = null
    var readerData = null
    function giveTheBook ( client, data = new Date() ) {
        readerName = client
        readerData = data
    }
    this.getBookInfo = function () {
        var text = readerName ? "выдана на руки" : "есть в наличии"
        console.info ( `${author}, ${title} (${year}): ${text}` )
    }
    this.getTheBook = function ( client, data ) {
        if ( readerName ) {
            this.getBookInfo ()
            return null
        } else {
            giveTheBook ( client, data )
            return {title: title,}
        }
    }
    this.returnBook = function () {
        readerName = null
        readerData = null
    }
}

var books = []
books [0] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books [1] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )
books [2] = new LibraryBook ( "Кобзарь", "2005", "Тарас Шевченко" )

console.log ( books )

books [0].getTheBook( "Иван Сидоренко", new Date ( 2018, 6, 25 ) )
books [0].getBookInfo()
books [0].returnBook()

/*
Дополнительно ( 5 баллов )
Объявите конструктор, который создает экземпляры с унаследованным методом addProperty

Метод addProperty должен принимать два аргумента:

имя свойства
значение свойства
и добавлять экземпляру новое свойство с указанным именем и значением
 */

function Sample ( params ) {
    Sample.prototype.setNewProperty = function ( propName, propValue ) {
        this [ propName ] = propValue
    }
}

var result = new Sample()
result.setNewProperty('name','sasha')
console.log(result)