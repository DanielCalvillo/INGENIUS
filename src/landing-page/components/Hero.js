import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import InputLabel from "@mui/material/InputLabel";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";

// import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
// import IngeniusLogo from "../../images/ingenius-logo.jpeg";
import ingeniusFondo from "../../images/shapingFuture.jpg";
import mapaTec from "../../images/mapa_tec.png";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
      : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outline: "1px solid",
  backgroundImage: `url(${
    theme.palette.mode === "light"
      ? ingeniusFondo
      : "/static/images/templates/templates-images/hero-dark.png"
  })`,
  backgroundSize: "cover",
  outlineColor:
    theme.palette.mode === "light"
      ? "hsla(220, 25%, 80%, 0.5)"
      : "hsla(210, 100%, 80%, 0.1)",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

// const scrollToSection = (sectionId) => {
//   const sectionElement = document.getElementById(sectionId);
//   const offset = 128;
//   if (sectionElement) {
//     const targetScroll = sectionElement.offsetTop - offset;
//     sectionElement.scrollIntoView({ behavior: "smooth" });
//     window.scrollTo({
//       top: targetScroll,
//       behavior: "smooth",
//     });
//   }
// };

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
            : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" } }}
        >
          <h3 style={{ textAlign: "justify" }}>
            INGENIUS Congreso y Expoingenierías es un evento magistral que reúne
            a estudiantes, académicos y profesionales del campo de la ingeniería
            y la ciencia para intercambiar ideas y conocimientos de alto valor.
            A través de ponencias, paneles, talleres y exposiciones
            estudiantiles, el congreso se dedica a fomentar la innovación, la
            sostenibilidad y la excelencia académica. Este evento se compromete
            a promover aprendizajes significativos y a desarrollar soluciones
            innovadoras y sostenibles frente a los desafíos actuales y futuros.
          </h3>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <h1 style={{ textAlign: "center", marginTop: "0rem" }}>
              13 de Junio 2024
            </h1>
            <img
              src={mapaTec}
              alt="MDN"
              style={{ width: "100%" }}
            />
          </Stack>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
