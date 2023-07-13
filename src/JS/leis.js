let events = [
    {
        nome:"Lei Geral De Proteção De Dados (LGPD)",
        assunto:"#01",
        sobre:"A lei que também é conhecida como LGPD, foi aprovada em agosto de 2018 e entrou em vigor em 2021. Inspirada no Regulamento Geral de Proteção de Dados (GDPR), dispõe sobre a proteção de dados pessoais, no meio digital, tanto de pessoa física quanto de pessoa jurídica. Empresas privadas e públicas devem se adequar aos parâmetros da lei e rever seus processos de coleta, armazenamento, descarte e tratamento de dados que são coletados sob pena de sansões."
    },
    {
        nome:"Lei Carolina Dieckmann",
        assunto:"#02",
        sobre:"A Lei Nº 12.737/12 impacta o Direito Penal, pois acrescenta os artigos 154-A e 154-B ao Código Penal Brasileiro. Além disso, altera a redação dos artigos 266 e 298. A norma trata de uma tendência do Direito: segurança no ambiente virtual. Sua redação prevê os crimes que decorrerem do uso indevido de informações e materiais pessoais que dizem respeito à privacidade de uma pessoa na internet, como fotos e vídeos."
    },
    {
        nome:"A Lei de Informática",
        assunto:"#03",
        sobre:"A Lei de Informática (Lei nº 8.248/1991) é um instrumento de política industrial, criado no início da década de 1990 para estimular a competitividade e a capacitação técnica de empresas brasileiras produtoras de bens de informática, automação e telecomunicações. Sua aplicação na Zona Franca de Manaus (ZFM) é gerida pelo Comitê das Atividades de Pesquisa e Desenvolvimento na Amazônia – CAPDA."
    },
    {
        nome:"Lei do Bem",
        assunto:"#04",
        sobre:"Ela cria a concessão de incentivos fiscais às pessoas jurídicas que realizarem pesquisa, desenvolvimento e inovação tecnológica. Ela busca também aproximar as empresas das universidades, potencializando os resultados em PD&I. Mas o que é inovação neste caso? Considera-se inovação tecnológica a “concepção de um novo produto ou processo de fabricação, bem como a agregação de novas funcionalidades ou características ao produto ou processo que implique em melhorias incrementais e efetivo ganho de qualidade ou produtividade, resultando em maior competitividade no mercado”."
    },
    {
        nome:"Marco Civil da Internet",
        assunto:"#05",
        sobre: "Essa lei que também é conhecida como Constituição da Internet Brasileira, estabelece princípios, direitos, deveres, garantias e regulamenta o uso da internet no Brasil, ou seja, a estabelece diretrizes para a utilização da mesma no país. Os principais pontos da lei são, Neutralidade da rede, Privacidade na web, Registro de acessos, Responsabilização pelo conteúdo. Como você viu, o Marco Civil da Internet prevê a segurança de dados apenas em ambiente online. Antes dele entrou em vigor uma lei de incentivos para TI e automação, de modo mais abrangente."
    },
    {
        nome:"Pendente",
        assunto:"#06",
        sobre:"..."
    },
]
const layoutPrincipal = document.getElementById("container")
const addCard = () => {
    events.forEach((evento) => {
        const postCard = document.createElement('div')
        postCard.classList.add('card')
        postCard.innerHTML = `<div class="Text-tittle-lei"><h3 class="nome-evento">${evento.nome}</h3>
        <span class="number">${evento.assunto}</span></div>
        <p class="Inf-lei">${evento.sobre}</p>`

        layoutPrincipal.appendChild(postCard)
    })
}

addCard()