import cicleWaterImg from "../src/assets/cicle-water.png";
import orgao from "../src/assets/orgao.jpeg";
import animais from "../src/assets/animais.jpeg";
import fungos from "../src/assets/fungos.jpeg";
import agua_estado from "../src/assets/agua-estado.jpeg";
import cadeia_alimentar from "../src/assets/cadeia-alimentar.jpeg";
import logo from "../src/assets/capa-7ano.jpeg";

export const quiz_6ano = [
  // --- 1. Ciclo da Água ---
  {
    capa: cicleWaterImg,
    titulo: "Ciclo da Água",
    pergunta:
      "Como se chama o processo em que a água dos rios e mares vira vapor devido ao calor do Sol?",
    alternativas: ["Evaporação", "Condensação", "Precipitação", "Infiltração"],
    correta: "Evaporação",
  },
  {
    capa: cicleWaterImg,
    titulo: "Ciclo da Água",
    pergunta:
      "Quando as nuvens ficam pesadas e a água cai na forma de chuva, granizo ou neve, ocorre a:",
    alternativas: ["Transpiração", "Solidificação", "Precipitação", "Fusão"],
    correta: "Precipitação",
  },
  {
    capa: cicleWaterImg,
    titulo: "Ciclo da Água",
    pergunta:
      "Qual é a importância da infiltração da água no solo para o meio ambiente?",
    alternativas: [
      "Aumentar a temperatura da Terra",
      "Abastecer os lençóis freáticos",
      "Evitar que as plantas cresçam",
      "Transformar água salgada em doce",
    ],
    correta: "Abastecer os lençóis freáticos",
  },

  // --- 2. Ciclo da Lua ---
  {
    capa: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=2000&auto=format&fit=crop",
    titulo: "Ciclo da Lua",
    pergunta:
      "Qual fase ocorre quando a face voltada para a Terra não recebe iluminação direta do Sol?",
    alternativas: [
      "Lua Cheia",
      "Lua Nova",
      "Quarto Crescente",
      "Quarto Minguante",
    ],
    correta: "Lua Nova",
  },
  {
    capa: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=2000&auto=format&fit=crop",
    titulo: "Ciclo da Lua",
    pergunta:
      "Quanto tempo, aproximadamente, dura o ciclo completo das quatro fases principais da Lua?",
    alternativas: ["24 horas", "7 dias", "29 dias", "365 dias"],
    correta: "29 dias",
  },

  // --- 3. O Corpo Humano ---
  {
    capa: orgao,
    titulo: "O Corpo Humano",
    pergunta:
      "Qual sistema é responsável por transportar oxigênio e nutrientes para todas as células?",
    alternativas: [
      "Sistema Digestório",
      "Sistema Cardiovascular",
      "Sistema Respiratório",
      "Sistema Nervoso",
    ],
    correta: "Sistema Cardiovascular",
  },
  {
    capa: orgao,
    titulo: "O Corpo Humano",
    pergunta:
      "Qual órgão é o principal responsável pela troca de gases no corpo humano?",
    alternativas: ["Estômago", "Cérebro", "Pulmões", "Rins"],
    correta: "Pulmões",
  },
  {
    capa: orgao,
    titulo: "O Corpo Humano",
    pergunta:
      "O esqueleto humano e os músculos trabalham juntos para realizar qual função principal?",
    alternativas: [
      "Digestão de gorduras",
      "Sustentação e movimento",
      "Produção de pensamentos",
      "Bombeamento de sangue",
    ],
    correta: "Sustentação e movimento",
  },

  // --- 4. Fauna Brasileira ---
  {
    capa: animais,
    titulo: "Fauna Brasileira",
    pergunta:
      "Qual destes animais é um exemplo típico da fauna brasileira e símbolo da preservação do Cerrado?",
    alternativas: ["Leão", "Lobo-guará", "Urso Polar", "Canguru"],
    correta: "Lobo-guará",
  },
  {
    capa: animais,
    titulo: "Fauna Brasileira",
    pergunta:
      "O Mico-leão-dourado é um animal encontrado exclusivamente em qual bioma brasileiro?",
    alternativas: ["Pampa", "Caatinga", "Mata Atlântica", "Pantanal"],
    correta: "Mata Atlântica",
  },
  {
    capa: animais,
    titulo: "Fauna Brasileira",
    pergunta:
      "Qual desses animais é um réptil conhecido por habitar os rios do Pantanal e da Amazônia?",
    alternativas: ["Capivara", "Jacaré-paguá", "Tuiuiú", "Arara-azul"],
    correta: "Jacaré-paguá",
  },

  // --- 5. Cadeia Alimentar ---
  {
    capa: cadeia_alimentar,
    titulo: "Cadeia Alimentar",
    pergunta:
      "Como são chamados os seres que produzem seu próprio alimento, como as plantas?",
    alternativas: [
      "Consumidores",
      "Decompositores",
      "Produtores",
      "Predadores",
    ],
    correta: "Produtores",
  },
  {
    capa: fungos,
    titulo: "Cadeia Alimentar",
    pergunta: "Qual é a função dos fungos e bactérias em uma cadeia alimentar?",
    alternativas: [
      "Produzir oxigênio para animais",
      "Caçar animais de grande porte",
      "Decompor a matéria orgânica",
      "Servir apenas como alimento",
    ],
    correta: "Decompor a matéria orgânica",
  },
  {
    capa: cadeia_alimentar,
    titulo: "Cadeia Alimentar",
    pergunta:
      "Se o gavião come a serpente, e a serpente come o sapo, quem costuma ser o consumidor secundário na base dessa cadeia?",
    alternativas: ["O gavião", "A serpente", "O sapo", "A planta"],
    correta: "O sapo",
  },

  // --- 6. Extra: Estados da Água ---
  {
    capa: agua_estado,
    titulo: "Estados da Água",
    pergunta:
      "A água pode ser encontrada na natureza em três estados físicos. Quais são eles?",
    alternativas: [
      "Quente, frio e morno",
      "Sólido, líquido e gasoso",
      "Doce, salgada e potável",
      "Transparente, azul e branca",
    ],
    correta: "Sólido, líquido e gasoso",
  },
];
export const quiz_7ano = [
  {
    capa: logo,
    titulo: "Fósseis",
    pergunta: "O que são, na sua essência, os fósseis?",
    alternativas: [
      "Restos ou vestígios de seres vivos do passado",
      "Pedras vulcânicas muito antigas",
      "Animais exóticos que ainda vivem hoje",
      "Qualquer osso encontrado na natureza",
    ],
    correta: "Restos ou vestígios de seres vivos do passado",
  },
  {
    capa: logo,
    titulo: "Fósseis",
    pergunta:
      "Em que tipo de rocha é mais comum os cientistas encontrarem fósseis preservados?",
    alternativas: [
      "Rochas sedimentares",
      "Rochas magmáticas",
      "Rochas derretidas",
      "Rochas metamórficas",
    ],
    correta: "Rochas sedimentares",
  },
  {
    capa: logo,
    titulo: "Fósseis",
    pergunta:
      "Qual é a principal importância do estudo dos fósseis para a ciência?",
    alternativas: [
      "Ajudar a compreender a história e a evolução da vida na Terra",
      "Descobrir novos materiais para construção",
      "Prever como será o clima no futuro",
      "Criar novos animais em laboratório",
    ],
    correta: "Ajudar a compreender a história e a evolução da vida na Terra",
  },
  {
    capa: logo,
    titulo: "Organização dos Seres Vivos",
    pergunta:
      "Qual é a estrutura básica e fundamental que forma todos os seres vivos?",
    alternativas: ["A célula", "O osso", "A pele", "O coração"],
    correta: "A célula",
  },
  {
    capa: logo,
    titulo: "Organização dos Seres Vivos",
    pergunta:
      "Um conjunto de células semelhantes que trabalham em grupo para realizar a mesma função forma um:",
    alternativas: ["Tecido", "Órgão", "Sistema", "Organismo"],
    correta: "Tecido",
  },
  {
    capa: logo,
    titulo: "Organização dos Seres Vivos",
    pergunta:
      "O coração, os pulmões e o estômago são exemplos de que nível de organização?",
    alternativas: ["Órgãos", "Células", "Tecidos", "Sistemas completos"],
    correta: "Órgãos",
  },
  {
    capa: logo,
    titulo: "Sistemas do Corpo Humano",
    pergunta:
      "Que sistema do nosso corpo é responsável por extrair os nutrientes dos alimentos que comemos?",
    alternativas: [
      "Sistema Digestivo",
      "Sistema Respiratório",
      "Sistema Nervoso",
      "Sistema Locomotor",
    ],
    correta: "Sistema Digestivo",
  },
  {
    capa: logo,
    titulo: "Sistemas do Corpo Humano",
    pergunta: "Qual é a principal função do nosso Sistema Respiratório?",
    alternativas: [
      "Realizar a troca de gases (oxigénio e dióxido de carbono)",
      "Bombear o sangue pelo corpo",
      "Digerir as proteínas",
      "Sustentar os ossos",
    ],
    correta: "Realizar a troca de gases (oxigénio e dióxido de carbono)",
  },
  {
    capa: logo,
    titulo: "Sistemas do Corpo Humano",
    pergunta:
      "O sangue viaja por todo o corpo a transportar oxigénio. Que órgão funciona como a 'bomba' desse sistema?",
    alternativas: ["Coração", "Pulmão", "Rim", "Fígado"],
    correta: "Coração",
  },
  {
    capa: logo,
    titulo: "Sistemas do Corpo Humano",
    pergunta:
      "Os ossos e os músculos trabalham em conjunto para formar que sistema do corpo humano?",
    alternativas: [
      "Sistema Locomotor",
      "Sistema Circulatório",
      "Sistema Digestivo",
      "Sistema Reprodutor",
    ],
    correta: "Sistema Locomotor",
  },
  {
    capa: logo,
    titulo: "Percebendo o Ambiente",
    pergunta:
      "Que órgão funciona como o grande 'centro de comando' do nosso Sistema Nervoso?",
    alternativas: ["Cérebro", "Coração", "Estômago", "Medula óssea"],
    correta: "Cérebro",
  },
  {
    capa: logo,
    titulo: "Percebendo o Ambiente",
    pergunta:
      "Se tocarmos numa panela muito quente, que estruturas enviam rapidamente o sinal de dor para o cérebro?",
    alternativas: [
      "Os nervos",
      "Os ossos",
      "Os vasos sanguíneos",
      "Os músculos",
    ],
    correta: "Os nervos",
  },
  {
    capa: logo,
    titulo: "Percebendo o Ambiente",
    pergunta:
      "Os órgãos dos sentidos ajudam-nos a interagir com o mundo. Qual é o órgão principal da visão?",
    alternativas: ["Olhos", "Ouvidos", "Nariz", "Pele"],
    correta: "Olhos",
  },
  {
    capa: logo,
    titulo: "Percebendo o Ambiente",
    pergunta:
      "Quando sentimos o cheiro de um bolo no forno, estamos a usar que sentido?",
    alternativas: ["Olfato", "Paladar", "Audição", "Tato"],
    correta: "Olfato",
  },
  {
    capa: logo,
    titulo: "A Água no Corpo",
    pergunta:
      "Aproximadamente 70% do corpo humano é composto por uma substância fundamental. Qual é?",
    alternativas: ["Água", "Gordura", "Músculo", "Cálcio"],
    correta: "Água",
  },
];
