document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que contêm comandos
    const commands = document.querySelectorAll(".command");

    commands.forEach(command => {
        // Indica visualmente que o elemento é interativo
        command.style.cursor = "pointer";
        command.title = "Clique para copiar o comando";

        // Adiciona o evento de clique a cada comando
        command.addEventListener("click", () => {
            const textToCopy = command.innerText;
            
            // Copia o texto para a área de transferência do sistema
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Alerta informando o sucesso
                alert(`Comando copiado com sucesso:\n${textToCopy}`);
            }).catch(err => {
                console.error("Houve um erro ao tentar copiar o texto: ", err);
            });
        });
    });
});
