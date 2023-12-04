import {PickAFile} from "@/app/lib/functions/PickAFile/PickAFile";
import CryptoJS from "crypto-js";
import {Download} from "@/app/lib/functions/Download/Download";
import {
    ConvertWordArrayToUint8Array
} from "@/app/lib/functions/ConvertWordArrayToUint8Array/ConvertWordArrayToUint8Array";

export const DecryptFile = (password:string) => {
    if (!password) return alert('Ввод пароля пуст! Прерывание.');
    const pass = CryptoJS.SHA3(password);

    PickAFile(false).then((file) => {
        const reader = new FileReader();

        reader.onload = (e:any) => {
            try {
                const decrypted = CryptoJS.Rabbit.decrypt(e.target.result as string, pass);
                const typedArray: any = ConvertWordArrayToUint8Array(decrypted);
                Download(typedArray, `Расшифрованный-${file.name}`, file.type);
            } catch (error) {
                console.log('Неверный пароль!');
            }
        };

        reader.readAsText(file);
    });
}