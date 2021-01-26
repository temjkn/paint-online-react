import Tool from "./Tools";

export default class Eraser extends Tool{
    mouseMoveHandler(e){ //двигаю мышь с нажатой кнопкой
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x,y){
        this.ctx.lineTo(x,y)
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.stroke()
    }
}