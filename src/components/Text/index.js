import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./styles";

export default function Text() {
  return (
    <>
      <Typography sx={styles.title} variant="h3" component="h1">
        Feliz dia dos namorados!
      </Typography>
      <Typography sx={styles.text} variant="h5" component="p">
        Pois senta lá que aqui vem mais uma demonstração de carinho bizarra da
        Roberta, daquelas que tu vai só dar uma risadinha e me responder com
        "doente". E talvez tu ache extremamente brega, e tudo bem. Mas eu me
        prestei a programar um sitezinho, por mais simples que seja, pra lembrar
        o quanto tu é especial pra mim. Espero conseguir demonstrar o quanto eu
        gosto de ti todos os dias, nem que seja desse jeito meio esquisito que
        eu tenho de fazer as coisas. Muito obrigada por cada momento vivido ao
        teu lado e por ser tão importante pra mim. Obrigada por acreditar em mim
        quando nem eu acredito, por acordar do meu ladinho sempre que possível e
        por ser exatamente do jeitinho que tu é. Que a gente faça dar certo
        (como já fazemos) mesmo com nosso jeitinho todo errado e que esse seja
        apenas o primeiro de muitos anos ao teu lado. Te amo do tamanho do
        universo, meu gatinho! ❤
      </Typography>
    </>
  );
}
