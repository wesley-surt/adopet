export class ImageService {

    static save(file) {
        const formData = new FormData();
        formData.append('file', file.files[0])
        formData.append('name', file.name)
    
        return fetch('http://localhost:4000/pictures', {
            method: 'POST',
            body: formData
        })
    }

    static handleDisplay(nameFile, tagFile) {
        return fetch(`http://localhost:4000/imagem/${nameFile}`, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a imagem');
            }
            return response.blob();
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            tagFile.src = imageUrl;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
}    
