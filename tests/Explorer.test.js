const Explorer = require('../Models/Explorer');

let explorer = new Explorer();
test('explorer name should be explorer', () => {
    expect(explorer.name).toBe("explorer");
});

test('explorer should be correctly modified', () => {
    let data = "A - Lara - 1 - 1 - S - AADADAGGA"
    explorer.setExplorer(data);
    expect(explorer.name).toBe("Lara");
    expect(explorer.positionX).toBe(1);
    expect(explorer.positionY).toBe(1);
    expect(explorer.orientation).toBe('S');
    expect(explorer.sequence).toBe("AADADAGGA");
    expect(explorer.tresorCount).toBe(0);
});

test('explorer orientation S with direction D should moove to orientation 0', () => {
    let data = "A - Lara - 1 - 1 - S - AADADAGGA"
    explorer.setExplorer(data);
    explorer.turn('D')
    expect(explorer.orientation).toBe("O");
});
