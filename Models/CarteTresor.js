'use strict';

class CarteTresor {
    constructor (){
        this.tabCarte = [];
    }

    setCarte(data){
        let c = data.split(' - ')
        let Xsize = parseInt(c[2])
        let Ysize = parseInt(c[1])

        let tab = new Array(Xsize);
        for (let i = 0; i < tab.length; i++) {
            tab[i] = new Array(Ysize);
        }

        for(let i = 0; i < Xsize ; i++){
            for(let j = 0; j < Ysize ; j++){
                tab[i][j] = '.'
            }
        }
        this.tabCarte = tab;
    }

    setCase(x, y, data){
        this.tabCarte[x][y] = data;
    }

    mooveExplorer(xd, yd, xe, ye){
        this.tabCarte[xd][yd] = '.';
        this.tabCarte[xe][ye] = 'A';
    }

    placeTresor(data){
        let c = data.split(' - ')
        let X = parseInt(c[2])
        let Y = parseInt(c[1])
        this.tabCarte[X][Y] = 'T(' + parseInt(c[3]) + ')';
    }

    placeMontagne(data){
        let c = data.split(' - ')
        let X = parseInt(c[2])
        let Y = parseInt(c[1])
        this.tabCarte[X][Y] = 'M';
    }

    placeAventurier(data){
        let c = data.split(' - ')
        let X = parseInt(c[3])
        let Y = parseInt(c[2])
        this.tabCarte[X][Y] = 'A';
    }

    toString(){
        return JSON.stringify(this);
    }

    toSaveString(){
        let carte = 'C - ' + this.tabCarte[0].length + ' - ' + this.tabCarte.length
        for(let i = 0; i < this.tabCarte.length; i++){
            if(this.tabCarte[i] !== '.'){
                for(let j = 0; j < this.tabCarte[i].length; j++){
                    if(this.tabCarte[i][j] === 'M'){
                        carte += '\n';
                        carte += 'M - ' + j + ' - ' + i;
                    } else if(this.tabCarte[i][j][0] === 'T'){
                        carte += '\n';
                        carte += 'T - ' + j + ' - ' + i + ' - ' + this.tabCarte[i][j][2];
                    }
                }
            }

        }
        return carte;
    }
}

module.exports = CarteTresor;
