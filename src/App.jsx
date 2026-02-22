import React, { useState } from "react"; // Removemos o useMemo
import "./App.css";

import { quiz_6ano, quiz_7ano } from "../data/data";

function App() {
  const coresClasses = ["btn-vermelho", "btn-verde", "btn-azul", "btn-amarelo"];

  const [quizAtivo, setQuizAtivo] = useState(null);

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [acertou, setAcertou] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultadoFinal, setMostrarResultadoFinal] = useState(false);

  // --- 1. NOVA FUNÇÃO: Prepara e embaralha o quiz ANTES de mostrar na tela ---
  const iniciarQuiz = (quizEscolhido) => {
    // Passa por todas as perguntas do quiz escolhido e embaralha as alternativas
    const quizEmbaralhado = quizEscolhido.map((item) => ({
      ...item,
      alternativas: [...item.alternativas].sort(() => Math.random() - 0.5),
    }));

    // Zera os estados e ativa o quiz já embaralhado
    setPerguntaAtual(0);
    setRespostaSelecionada(null);
    setAcertou(null);
    setPontuacao(0);
    setMostrarResultadoFinal(false);
    setQuizAtivo(quizEmbaralhado); // Salva no estado a versão bagunçada
  };

  // --- RENDERIZAÇÃO DO MENU INICIAL ---
  if (!quizAtivo) {
    return (
      <div className="app-fundo flex-centro">
        <div className="tela-final">
          <h1>Escolha a sua turma 📚</h1>
          <div className="botoes-finais" style={{ marginTop: "30px" }}>
            {/* 2. ATUALIZADO: Agora chamamos iniciarQuiz ao invés de setQuizAtivo direto */}
            <button
              onClick={() => iniciarQuiz(quiz_6ano)}
              className="btn-acao btn-azul"
            >
              ▶️ Quiz 6º Ano
            </button>

            <button
              onClick={() => iniciarQuiz(quiz_7ano)}
              className="btn-acao btn-verde"
            >
              ▶️ Quiz 7º Ano
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- LÓGICA DO QUIZ ---
  const dadosAtuais = quizAtivo[perguntaAtual];

  const verificarResposta = (opcaoSelecionada) => {
    if (respostaSelecionada) return;

    setRespostaSelecionada(opcaoSelecionada);

    if (opcaoSelecionada === dadosAtuais.correta) {
      setAcertou(true);
      setPontuacao(pontuacao + 1);
    } else {
      setAcertou(false);
    }
  };

  const avancarPergunta = () => {
    const proximaPergunta = perguntaAtual + 1;

    if (proximaPergunta < quizAtivo.length) {
      setPerguntaAtual(proximaPergunta);
      setRespostaSelecionada(null);
      setAcertou(null);
    } else {
      setMostrarResultadoFinal(true);
    }
  };

  const recomecarQuiz = () => {
    // Apenas volta para o menu
    setQuizAtivo(null);
  };

  // --- RENDERIZAÇÃO DA TELA FINAL ---
  if (mostrarResultadoFinal) {
    return (
      <div className="app-fundo flex-centro">
        <div className="tela-final">
          <h1>Fim do Quiz! 🎉</h1>
          <p>
            Você acertou <strong>{pontuacao}</strong> de{" "}
            <strong>{quizAtivo.length}</strong> perguntas.
          </p>
          <div className="botoes-finais">
            <button onClick={recomecarQuiz} className="btn-acao btn-recomecar">
              🔄 Escolher outro Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDERIZAÇÃO DO SLIDE DE PERGUNTA ---
  return (
    <div className="app-fundo">
      <div className="quiz-slide">
        {/* Lado Esquerdo: Pergunta e Alternativas */}
        <div className="quiz-conteudo">
          <span className="quiz-titulo">{dadosAtuais.titulo}</span>
          <h2 className="quiz-pergunta">{dadosAtuais.pergunta}</h2>

          <div className="quiz-alternativas">
            {/* 3. ATUALIZADO: Lemos direto de dadosAtuais.alternativas, pois já veio embaralhado! */}
            {dadosAtuais.alternativas.map((opcao, index) => (
              <button
                key={index}
                onClick={() => verificarResposta(opcao)}
                disabled={respostaSelecionada !== null}
                className={`btn-opcao ${coresClasses[index]} ${respostaSelecionada && opcao !== respostaSelecionada ? "opaco" : ""}`}
              >
                {opcao}
              </button>
            ))}
          </div>

          {/* Caixa de Resultado e Botão Avançar */}
          {respostaSelecionada && (
            <div
              className={`resultado-box ${acertou ? "resultado-certo" : "resultado-errado"}`}
            >
              <div>
                <h3>
                  {acertou ? "🎉 Resposta Correta!" : "❌ Resposta Errada!"}
                </h3>
                {!acertou && (
                  <p>
                    A certa era: <strong>{dadosAtuais.correta}</strong>
                  </p>
                )}
              </div>

              <button onClick={avancarPergunta} className="btn-proxima">
                {perguntaAtual === quizAtivo.length - 1
                  ? "Finalizar Quiz ➔"
                  : "Próxima Pergunta ➔"}
              </button>
            </div>
          )}
        </div>

        {/* Lado Direito: Foto de Capa Dinâmica */}
        <div className="quiz-capa">
          <img src={dadosAtuais.capa} alt="Capa do Quiz" />
        </div>
      </div>
    </div>
  );
}

export default App;
