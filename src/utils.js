import CryptoJS from 'crypto-js';

export const encryptData = (data) =>
 CryptoJS.AES.encrypt(JSON.stringify(data), '6d09g496-kcdf-11ea-a3c1-0282ac192345').toString();

 
export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, '6d09g496-kcdf-11ea-a3c1-0282ac192345');
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        return null;
    }
}