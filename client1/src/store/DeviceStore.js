import {makeAutoObservable} from "mobx";
import photo from "../asets/400x400.png"
export  default  class DeviceStore{
    constructor()  {
    this._types = [
        {id: 1, name: 'Холодиьник'},
        {id: 2, name: 'Смартфон'},
        {id: 3, name: 'Планшеты'},
        {id: 4, name: 'Ноутбуки'}
        ]
    this._brands = [
        {id: 1, name: 'Honor'},
        {id: 4, name: 'Sumsung'},
        {id: 3, name: 'Asus'},
        {id: 2, name: 'Apple'}

    ]
        this._device = [
            {id: 1, name: 'Iphone 12 pro', price:2500, rating:5, img:photo},
            {id: 2, name: 'Iphone 12 pro', price:2500, rating:5, img:photo},
            {id: 3, name: 'Iphone 12 pro', price:2500, rating:5, img:photo},
            {id: 4, name: 'Iphone 12 pro', price:2500, rating:5, img:photo},
            {id: 5, name: 'Iphone 12 pro', price:2500, rating:5, img:photo}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setIsTypes(types){
     this._types = types

    }
    setIsBrands(brands){
       this._brands = brands

    }
    setIsDevice(device){
      this._device = device

    }
    setSelectedType(type){
         this._selectedType = type

    }
    setSelectedBrand(brand){
        this._selectedBrand = brand

    }



    get types(){
        return this._types
    }


    get brands(){
        return this._brands
    }
    get devices(){
        return this._device
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }

}