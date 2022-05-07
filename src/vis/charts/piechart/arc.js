import Color from "../../visualization/color";
import Mark from '../mark';

const COLOR = new Color();

class Arc extends Mark {
    constructor(){
        super();
        //arc
        this._color = COLOR.DEFAULT;
        this._startAngle = 0;
        this._endAngle = 0;
        this._innerRadius = 0;
        this._outerRadius = 0;
        this._opacity = 1;

        //text
        this._text = "";
        this._textColor = COLOR.TEXT;
        this._textOpacity = 1;
    }

  

    color(value){
        if(!value){
            return this._color;
        }
        this._color = value;
    }

    angleStart(value){
        if(!value){
            return this._startAngle;
        }
        this._startAngle = value;
    }

    angleEnd(value){
        if(!value){
            return this._endAngle;
        }
        this._endAngle = value;
    }


    radiusInner(value){
        if(!value){
            return this._innerRadius;
        }
        this._innerRadius = value
    }

    radiusOuter(value){
        if(!value){
            return this._outerRadius;
        }
        this._outerRadius = value
    }


    opacity(value){
        if(!value){
            return this._opacity;
        }
        this._opacity = value;
    }
    
    text(value){
        if(!value){
            return this._text;
        }
        this._text = value;
    }

    textColor(value){
        if(!value){
            return this._textColor;
        }
        this._textColor = value;
    }

    textOpacity(value){
        if(!value){
            return this._textOpacity;
        }
        this._textOpacity = value;
    }
}

export default Arc;