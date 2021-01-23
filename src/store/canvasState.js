// хранит состояние canvas

const { makeAutoObservable } = require("mobx");

class CanvasState {
    canvas = null //храню ссылку на canvas
    constructor(){
        makeAutoObservable(this) //данные хранимые в классе становятся отслеживаемыми
    }

    setCanvas(canvas){
        this.canvas = canvas //сохраняю текущий инструмент
    }
}

export default new CanvasState();