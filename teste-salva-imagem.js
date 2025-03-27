const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const file = document.querySelector('input').files[0];
    const formData = new FormData();
    formData.append('file', file)
    formData.append('name', file.name)

    console.log(formData)
/** 
    fetch('http://localhost:3000/pictures', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        alert('Imagem enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Falha ao enviar a imagem.');
    });*/
})

fetch('http://localhost:3000/imagem', {
    method: 'GET'
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar a imagem');
        }
        console.log(response)
        console.log('deu certo')
        return response.blob(); // Converte a resposta em um objeto Blob
    })
    .then(blob => {
        // Cria uma URL para o Blob
        const imageUrl = URL.createObjectURL(blob);

        // Exibe a imagem em um elemento <img>
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
