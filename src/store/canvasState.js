// хранит состояние canvas

const { makeAutoObservable } = require("mobx");

class CanvasState {
    canvas = null //храню ссылку на canvas
    undoList = []
    redoList = []
    constructor(){
        makeAutoObservable(this) //данные хранимые в классе становятся отслеживаемыми
    }

    setCanvas(canvas){
        this.canvas = canvas //сохраняю текущий инструмент
    }
    pushToUndo(data){
        this.undoList.push(data)
    }
    pushToRedo(data){
        this.redoList.push(data)
    }

    undo(){
        let ctx = this.canvas.getContext('2d'); //получил текущий снимок canvas
        if(this.undoList.length > 0){
            let dataUrl = this.undoList.pop() //получил последний элемент массива с картинками
            this.redoList.push(this.canvas.toDataURL()) //записал в отменненные
            let img = new Image();
            img.src = dataUrl; // создал картинку с последним снимком
            img.onload = () => {
                ctx.clearRect(0,0,this.canvas.width, this.canvas.height); // очистил canvas
                ctx.drawImage(img,0,0,this.canvas.width, this.canvas.height) // заполнил поле снимком
            }
        }else{
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
        }

    }

    redo(){
        let ctx = this.canvas.getContext('2d');
        if(this.redoList.length >0) {
            let dataUrl = this.redoList.pop();
            this.undoList.push(this.canvas.toDataURL());
            let img = new Image();
            img.src = dataUrl;
            img.onload = () => {
                ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
                ctx.drawImage(img,0,0,this.canvas.width, this.canvas.height);
            }
        }
    }
}

export default new CanvasState();