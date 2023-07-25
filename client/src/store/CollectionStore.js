import {makeAutoObservable} from "mobx";

export default class CollectionStore {
    constructor() {
       this._collections = [
           {id: 1, name: 'My films', userId: 1, description: 'There is many interesting films about nature, peoples and other things', topic: 'films', image: 'ada.jpg'},
           {id: 2, name: 'My dreams', userId: 2, description: 'There is many interesting films about nature, peoples and other things', topic: 'films', image: 'ada.jpg'},
           {id: 3, name: 'My drinks', userId: 3, description: 'There is many interesting films about nature, peoples and other things', topic: 'films', image: 'ada.jpg'},
           {id: 4, name: 'My paints', userId: 4, description: 'There is many interesting films about nature, peoples and other things', topic: 'films', image: 'ada.jpg'}
       ]
        makeAutoObservable(this)
    }

    setCollections(collections) {
        this._collections = collections
    }
    get collections() {
        return this._collections
    }
}