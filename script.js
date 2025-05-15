// filepath: c:\Users\Devyd silva\Documents\GitHub\portfoleoDs\script.js
function enviarWhats(event) {
    event.preventDefault();

    try {
        const nome = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        const telefone = '5581995566408';

        if (!nome || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const texto = `Olá, me chamo ${nome} e gostaria de saber mais sobre o serviço.\n\nMensagem: ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);

        const whatsappUrl = `https://wa.me/${telefone}?text=${msgFormatada}`;

        console.log(whatsappUrl);

        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Ocorreu um erro ao tentar enviar a mensagem. Por favor, tente novamente.');
    }
}