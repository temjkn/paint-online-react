import toolState from "../store/toolState"
import Tool from "./Tools"

export default class Brush extends Tool{
    // constructor(canvas){
    //     super(canvas);
    // }
    mouseMoveHandler(e){ //двигаю мышь с нажатой кнопкой
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x,y){
        this.ctx.lineTo(x,y)
        this.ctx.strokeColor = toolState.strokeColor
        this.ctx.stroke()
    }
}