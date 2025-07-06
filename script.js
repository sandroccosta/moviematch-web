document.getElementById("preferenciasForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const generos = document.getElementById("generos").value.split(",").map(g => g.trim());
    const filmes = document.getElementById("filmes").value.split(",").map(f => f.trim());

    const resposta = document.getElementById("resposta");

    try {
        const response = await fetch("https://moviematch-api.onrender.com/preferencias", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome: "Usuário Teste",
                generos_favoritos: generos,
                filmes_favoritos: filmes
            })
        });

        const data = await response.json();

        if (response.ok) {
            resposta.innerText = "Preferências enviadas com sucesso!";
        } else {
            resposta.innerText = `Erro: ${data.erro || "Não foi possível enviar os dados"}`;
        }
    } catch (err) {
        resposta.innerText = `Erro de conexão: ${err.message}`;
    }
});
