
// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';

// const iv = randomBytes(16);
// const password = 'Password used to generate key';

// // The key length is dependent on the algorithm.
// // In this case for aes256, it is 32 bytes.
// const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
// const cipher = createCipheriv('aes-256-ctr', key, iv);

// const textToEncrypt = 'Nest';
// const encryptedText = Buffer.concat([
//   cipher.update(textToEncrypt),
//   cipher.final(),
// ]);

import * as crypto from 'crypto'

export function addSalt() {
  return crypto.randomBytes(3).toString('base64')
}

export function encript(userPassword: string, salt: string): string {
  return crypto.pbkdf2Sync(userPassword, salt, 10000, 16, 'sha256').toString('base64')
}