import {makeAutoObservable} from "mobx";

export default class CollectionStore {
    constructor() {
       this._collections = [
           {id: 1, name: 'addad', userId: 1, description: 'ada', topic: 'ada', image: 'ada.jpg'}
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