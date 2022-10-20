import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import "./styles.css";
import { GlobalStyle } from "./GlobalStyle";
import { Cabecalho, TelaInteira, Principal, Lateral, Secao, Lista, Fim, Titulo4 } from "./styled"

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      
      <TelaInteira>
        <Cabecalho>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Cabecalho>

        <Principal>
          <Lateral>
            <Lista>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </Lista>
          </Lateral>

          <Secao>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </Secao>
        </Principal>

        <Fim>
          <Titulo4>Oi! Eu moro no footer!</Titulo4>
        </Fim>
      </TelaInteira>
    </div>
  );
}
