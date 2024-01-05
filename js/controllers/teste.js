/**import { createRequire } from "module";
const require = createRequire(import.meta.url);

const jump = require("jump.js");

export function jumpAPI(path) {
    // Caminho da imagem de entrada e saída
    const imagePath = path;
    const outputPath = "";

    // Tamanho desejado da nova imagem
    const novoLargura = 200; // em pixels
    const novoAltura = 200; // em pixels

    // Carregar a imagem usando Jimp
    Jimp.read(imagePath)
        .then((imagem) => {
            // Redimensionar a imagem
            return imagem.resize(novoLargura, novoAltura);
        })
        .then((imagemRedimensionada) => {
            // Salvar a nova imagem
            const novaImg = imagemRedimensionada.write(outputPath);
            console.log(novaImg);
            return novaImg;
        })
        .catch((erro) => {
            console.error(erro);
        });
}
*/
