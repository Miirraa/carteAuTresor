const CarteTresor = require('../Models/CarteTresor');

let tab = new CarteTresor();
test('tab should be 3 x 3 full off .', () => {
    let result = [[".", ".", "."], [".", ".", "."], [".", ".", "."]]
    tab.setCarte('C - 3 - 3');
    expect(tab.tabCarte).toStrictEqual(result);
});


test('tab[0][0] should be M', () => {
    let result = [["M", ".", "."], [".", ".", "."], [".", ".", "."]]
    tab.setCarte('C - 3 - 3');
    tab.setCase(0,0,'M')
    expect(tab.tabCarte).toStrictEqual(result);
});

test('A should Moove from [0][0] to [1][1]', () => {
    let result = [[".", ".", "."], [".", "A", "."], [".", ".", "."]]
    tab.setCarte('C - 3 - 3');
    tab.setCase(0,0,'A');
    tab.mooveExplorer(0,0,1,1);
    expect(tab.tabCarte).toStrictEqual(result);
});

test('T should be place at[1][1] with 3 value', () => {
    let result = [[".", ".", "."], [".", "T(3)", "."], [".", ".", "."]]
    tab.setCarte('C - 3 - 3');
    tab.placeTresor("T - 1 - 1 - 3")
    expect(tab.tabCarte).toStrictEqual(result);
});

test('M should be place at[1][1] with 3 value', () => {
    let result = [[".", ".", "."], [".", "M", "."], [".", ".", "."]]
    tab.setCarte('C - 3 - 3');
    tab.placeMontagne("M - 1 - 1")
    expect(tab.tabCarte).toStrictEqual(result);
});
