import {PickAFile} from "@/app/lib/functions/PickAFile/PickAFile";
import CryptoJS from "crypto-js";
import {Download} from "@/app/lib/functions/Download/Download";

export const EncryptFile = (password: string) => {
    if (!password) return alert('Ввод пароля пуст! Прерывание.');
    const pass = CryptoJS.SHA3(password);

    PickAFile(false).then((file) => {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
            const encrypted = CryptoJS.Rabbit.encrypt(wordArray, pass).toString();
            Download(encrypted, `Зашифрованный-${file.name}`, file.type);
        };

        reader.readAsArrayBuffer(file);
    });
};