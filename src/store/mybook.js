import { action, makeObservable, observable } from 'mobx'

class MyBooks {
books = [];
constructor(){

}
addBooks(book){
this.books = [...this.books, {...book, id: Math.random}]
}
deleteBooks(id){
    this.books = this.books.filter(item => item.id !== id )
}
}
