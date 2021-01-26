// хранит состояние и логику состояния
// связанное с инструментом (толщина,активный инструмент)

const { makeAutoObservable } = require("mobx");

class ToolState {
    tool = null;
    strokeColor = '#e66465';
    fillColor = '#f6b73c';
    lineWidth = 10;

    constructor(){
        makeAutoObservable(this) //данные хранимые в классе становятся отслеживаемыми
    }

    setTool(tool){
        this.tool = tool //сохраняю текущий инструмент
    }
    setFillColor(color){
        this.tool.fillColor = color
    }
    setStrokeColor(color){
        this.tool.strokeColor = color
    }
    setLineWidth(number){
        this.tool.lineWidth = number
    }
}

export default new ToolState();