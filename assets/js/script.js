const caoImg = document.getElementById('cao-img');
const URL = 'https://dog.ceo/api/breeds/image/random';

async function gerarImgCao(){
    try {
        const resposta = await fetch(URL);
        const imagem = await resposta.json();

            if(imagem.status != 'success'){
                throw new Error();
            }

        caoImg.src = imagem.message;
    } 
    catch (error) {
        alert('Houve um erro no processamento!');
    }
};

gerarImgCao();