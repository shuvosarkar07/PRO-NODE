const buff = new ArrayBuffer(4);
const buffHandler = new DataView(buff);

buffHandler.setInt8(0, 80);
buffHandler.setInt8(1, 0b11111111); 
buffHandler.setInt8(2, 0x50);
buffHandler.setInt8(3, 0o120);

console.log(buffHandler);
console.log(buffHandler.getUint8(1));