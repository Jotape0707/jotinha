// Função para validação do formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Aqui você pode adicionar uma lógica para enviar os dados do formulário
    alert('Mensagem enviada com sucesso!');

    // Limpar o formulário após o envio
    document.getElementById('contatoForm').reset();
});

// Função para o menu responsivo
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Efeito de rolagem suave para links do menu
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
