// filepath: c:\Users\Devyd silva\Documents\GitHub\portfoleoDs\script.js
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5581995566408';

    const texto = `Olá, Me chamo ${nome} e gostaria de saber mais sobre o serviço. Mensagem: ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const whatsappUrl = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(whatsappUrl);

    window.open(whatsappUrl, '_blank');
}