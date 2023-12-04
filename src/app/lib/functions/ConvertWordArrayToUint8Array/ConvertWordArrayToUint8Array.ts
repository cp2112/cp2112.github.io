import CryptoJS from "crypto-js";

export const ConvertWordArrayToUint8Array = (wordArray: CryptoJS.lib.WordArray) => {
    const arrayOfWords = wordArray.hasOwnProperty('words') ? wordArray.words : [];

    const length = wordArray.hasOwnProperty('sigBytes') ? wordArray.sigBytes : arrayOfWords.length * 4;

    const uInt8Array = new Uint8Array(length);
    let index = 0;
    let word;
    let i;

    for (i = 0; i < length; i++) {
        word = arrayOfWords[i];
        uInt8Array[index++] = word >> 24;
        uInt8Array[index++] = (word >> 16) & 0xff;
        uInt8Array[index++] = (word >> 8) & 0xff;
        uInt8Array[index++] = word & 0xff;
    }
    return uInt8Array;
};