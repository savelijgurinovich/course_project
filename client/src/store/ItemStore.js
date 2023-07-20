import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items = [
            {id: 1, name: 'addad', userId: 1, collectionId: 1, description: 'ada', tags: 'ada', image: 'ada.jpg'}
        ]
        this._comments = [
            {id: 1, userId: 2, itemId: 1, text: 'adad'}
        ]
        makeAutoObservable(this)
    }

    setItems(items) {
        this._items = items
    }
    setComments(comments) {
        this._comments = comments
    }
    get comments() {
        return this._comments
    }
}