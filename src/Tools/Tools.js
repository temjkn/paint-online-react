export default class Tool{
    constructor(canvas){
        this.canvas = canvas //ссылка на canvas
        this.ctx = canvas.getContext('2d') // контекст, позволяет рисовать линии-фигуры
        this.destroyEvents() //удаляю предыдущий инструмент

    }
    destroyEvents(){
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
    }
}