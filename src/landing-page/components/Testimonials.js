import * as React from "react";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { useTheme } from "@mui/system";
import DiseñoMecanismos from "../../images/cultivo_invitro.PNG";
import optimizacionIndustria from "../../images/diseño_mecanismos.PNG";
import laboratorioITC from "../../images/ardino_nuevo.PNG";
import cultivoVegetal from "../../images/ciberseguridad_encripcion.PNG";
import bioReaccion from "../../images/optimizacion_industria.PNG";
import analisisSensorial from "../../images/biorreaccion.PNG";
// import creayProgramaRobot from "../../images/creaprogramayrobot.jpeg";

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    testimonial:
      "Descubre los principios fundamentales y las técnicas avanzadas en el diseño de mecanismos en este taller intensivo. Bajo la guía experta del Dr. Luis Álvarez, explorarás desde conceptos básicos hasta aplicaciones complejas utilizadas en la industria moderna. A través de ejercicios prácticos y discusiones teóricas, este taller te equipará con las habilidades necesarias para diseñar mecanismos eficientes que optimicen el rendimiento y la funcionalidad de diversas máquinas y sistemas.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    testimonial:
      "En este taller intensivo, liderado por la experta Mtra. Doris Flores, explorarás técnicas avanzadas de optimización utilizadas en ambientes industriales y de producción. Aprenderás a mejorar la eficiencia y productividad de los procesos mediante el uso de herramientas y metodologías de vanguardia. Este curso está diseñado para proporcionar una comprensión profunda de los métodos de optimización que pueden ser aplicados inmediatamente en entornos de trabajo reales.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Cindy Baker",
    occupation: "CTO",
    testimonial:
      "Adéntrate en el mundo de la ciberseguridad con este taller integral dirigido por el experto Mtro. Víctor Mañón. En este curso, aprenderás sobre las últimas tendencias y tecnologías en la protección de la información digital. El taller cubre desde conceptos básicos hasta estrategias avanzadas para defenderse contra ciberataques y asegurar infraestructuras críticas.",
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    testimonial:
      "Explora las técnicas de biotecnología aplicadas al cultivo de plantas en un entorno controlado en este fascinante taller dirigido por la Dra. Liliana Santos. Aprenderás sobre las metodologías avanzadas de cultivo in vitro, una herramienta esencial para la investigación y producción agrícola sostenible. Este taller ofrece una oportunidad única para entender cómo las plantas pueden ser cultivadas desde células individuales en condiciones de laboratorio, optimizando recursos y maximizando resultados.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: "John Smith",
    occupation: "Product Designer",
    testimonial:
      "Adéntrate en el fascinante mundo de las biorreacciones en este taller práctico, dirigido por el experimentado Mtro. C Juan Cruz. Este taller te introducirá a las técnicas y procesos fundamentales de la biorreacción, esenciales en diversas áreas de la biotecnología y la ingeniería química. Aprenderás a manejar reactores biológicos y a optimizar procesos biotecnológicos que son clave para la producción de bio-productos.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: "Daniel Wolf",
    occupation: "CDO",
    testimonial:
      "Sumérgete en el estudio científico de cómo los productos son percibidos por los sentidos en este taller de análisis sensorial dirigido por la experta Dra. Mariel Calderón. Aprenderás a evaluar y cuantificar las reacciones sensoriales a diferentes productos, una habilidad crucial en industrias como la alimentaria, cosmética y farmacéutica. Este taller te proporcionará las técnicas necesarias para diseñar, ejecutar y analizar estudios sensoriales, así como interpretar y comunicar los resultados de manera efectiva.",
  },
];

const talleres = [
  DiseñoMecanismos,
  optimizacionIndustria,
  laboratorioITC,
  cultivoVegetal,
  bioReaccion,
  analisisSensorial,
];

// const logoStyle = {
//   width: "64px",
//   opacity: 0.3,
// };

const tallerStyle = {
  width: "100%",
  height: "35rem",
};

export default function Testimonials() {
  // const theme = useTheme();
  // const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Talleres
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Participa en nuestros talleres interactivos y sumérgete en el mundo de
          la innovación y la tecnología. Nuestros talleres están diseñados para
          ofrecer una experiencia práctica inigualable, guiados por expertos en
          cada tema. Descubre cómo nuestros productos no solo sobresalen en
          calidad y durabilidad, sino que también están a la vanguardia de la
          innovación tecnológica. Únete a nosotros para una experiencia
          educativa que garantiza no solo aprender, sino también disfrutar y
          experimentar la satisfacción de dominar nuevas habilidades.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={12} md={6} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                justifySelf: "center",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <img
                  src={talleres[index]}
                  alt={`taller ${index + 1}`}
                  style={tallerStyle}
                />
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "justify", // Adds text justification
                  }}
                >
                  {testimonial.testimonial}
                </Typography> */}
              </CardContent>
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
}
