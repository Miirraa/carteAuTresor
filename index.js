'use strict'

const fs = require('fs');
const models = require('./Models');
const CarteTresor = models.CarteTresor;
const Explorer = models.Explorer;

function saveFile(carte, explorer){
    let result = "";
    result += carte.toSaveString();
    result += '\n';
    result += explorer.toSaveString();
    try {
        fs.writeFileSync('resultat.txt', result)
    } catch (err) {
        console.error(err)
    }
}

function main() {
    try {
        const data = fs.readFileSync('entree.txt').toString();
        const tabData = data.split('\n');
        let explorer = new Explorer();
        let carte = new CarteTresor();

        for(let i = 0; i < tabData.length; i++){
            if (tabData[i][0] === 'C') {
                carte.setCarte(tabData[i]);
            } else if (tabData[i][0] === 'M') {
                carte.placeMontagne(tabData[i]);
            } else if (tabData[i][0] === 'T') {
                carte.placeTresor(tabData[i]);
            } else if (tabData[i][0] === 'A') {
                carte.placeAventurier(tabData[i]);
                explorer.setExplorer(tabData[i]);
            } else {
                console.log("pas reconnu");
                console.log(tabData[i]);
            }
        }
        let xd = explorer.positionX;
        let yd = explorer.positionY;
        console.log(carte);
        console.log(explorer);
        explorer.playExplorer(carte);
        carte.mooveExplorer(xd, yd, explorer.positionX, explorer.positionY);
        console.log(carte);
        console.log(explorer);
        saveFile(carte, explorer);

    } catch (err) {
        console.error(err)
    }
}


main();





