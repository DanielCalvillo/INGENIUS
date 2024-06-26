import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import banner from "../../images/bannerIngenius.png";

const tiers = [
  {
    title: "ACCESO GENERAL",
    price: "GRATUITO",
    description: [
      "Acceso a ponencias",
      "Entrada a taller de preferencia",
      "Paneles",
    ],
    buttonText: "Registrate Ya!",
    buttonVariant: "contained",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
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
      <Box >
                  <img
                    src={banner}
                    alt="MDN"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Accesos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Invierte en tu crecimiento personal y profesional con nuestro acceso
          completo al evento. La entrada general incluye:
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={(theme) => ({
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                ...(tier.title === "ENTRADA GENERAL" && {
                  border: "none",
                  boxShadow:
                    theme.palette.mode === "light"
                      ? `0 8px 12px hsla(210, 98%, 42%, 0.2)`
                      : `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                  background:
                    "radial-gradient(circle at 50% 0%, hsl(210, 98%, 35%), hsl(210, 100%, 16%))",
                }),
              })}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    color: tier.title === "ENTRADA GENERAL" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === "ENTRADA GENERAL" && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        borderColor: "hsla(220, 60%, 99%, 0.3)",
                        backgroundColor: "hsla(220, 60%, 99%, 0.1)",
                        "& .MuiChip-label": {
                          color: "hsl(0, 0%, 100%)",
                        },
                        "& .MuiChip-icon": {
                          color: "primary.light",
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    color:
                      tier.title === "ENTRADA GENERAL" ? "grey.50" : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.8,
                    borderColor: "divider",
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === "ENTRADA GENERAL"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={{
                        color:
                          tier.title === "ENTRADA GENERAL"
                            ? "grey.50"
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  onClick={() =>
                    window.open(
                      "https://bit.ly/INGENIUS_2024",
                      "_blank"
                    )
                  }
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
