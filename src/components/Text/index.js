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
        Obrigada por cada momento vivido ao teu lado e por ser tão importante
        pra mim. Te amo do tamanho do universo!
      </Typography>
    </>
  );
}
