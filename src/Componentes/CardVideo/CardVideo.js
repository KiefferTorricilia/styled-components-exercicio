import { BoxPrincipal, Imagem, Titulo4 } from "./styled"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <Titulo4>{props.titulo}</Titulo4>
    </BoxPrincipal>
  );
}

export default CardVideo;
