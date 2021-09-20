'use strict';


class Explorer {
	constructor (){
	    this.name = "explorer";
		this.positionX = 0;
		this.positionY = 0;
		this.orientation = '';
		this.sequence = [];
		this.tresorCount = 0;
	}

    playerMoove(moove, carte){
        if(moove === 'A'){
            if(this.orientation === 'N') this.positionX -= 1;
            else if(this.orientation === 'S') this.positionX += 1;
            else if(this.orientation === 'E') this.positionY += 1;
            else if(this.orientation === 'O') this.positionY -= 1;
            this.playerSearch(carte);
        }
        else{
            this.turn(moove)
        }
    }

    turn(moove){
        if(moove === 'G'){
            if(this.orientation === 'N') this.orientation = 'O';
            else if(this.orientation === 'S') this.orientation = 'E';
            else if(this.orientation === 'E') this.orientation = 'N';
            else if(this.orientation === 'O') this.orientation = 'S';
        }else if(moove === 'D'){
            if(this.orientation === 'N') this.orientation = 'E';
            else if(this.orientation === 'S') this.orientation = 'O';
            else if(this.orientation === 'E') this.orientation = 'S';
            else if(this.orientation === 'O') this.orientation = 'N';
        }
	}

    playExplorer(carte){
	    for(let i = 0; i <this.sequence.length; i++){
	        this.playerMoove(this.sequence[i], carte);
        }
	    this.sequence = [];
    }

    playerSearch(carte){
	    let c = carte.tabCarte[this.positionX][this.positionY];
	    let data = '.'
	    if(c[0] === 'T'){
	        let tmp = c.split("T(");
	        let nbTresor = parseInt(tmp[1][0]);
	        this.tresorCount += 1;
            nbTresor -= 1;
            if(nbTresor > 0){
                data = 'T(' + nbTresor + ')';
            }
            carte.setCase(this.positionX, this.positionY, data)
        }
    };

    setExplorer(data){
        let c = data.split(' - ');
        this.name = c[1];
        this.positionX = parseInt(c[3]);
        this.positionY = parseInt(c[2]);
        this.orientation = c[4];
        this.sequence = c[5];
    }

	toString(){
		return JSON.stringify(this);
	}

    toSaveString(){
        let explorer = 'A - ' + this.name + ' - ' + this.positionY + ' - ' + this.positionX + ' - ' + this.orientation + ' - ' + this.tresorCount
        return explorer;
    }
}

module.exports = Explorer;
