function enviarWhats(event){

    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("Mensagem");
    const telefone = '5581995566408';

    const texto = `Olá, Me chamo ${nome.value} e gostaria de saber mais sobre o serviço. Mensagem: ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);

    console.log(url);

    const url = `https://wa.me/qr/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');
}


