import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
// import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
// import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
// import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
// import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AgendaIngenius from '../../images/AgendaIngenius.png'
import expoIngenierias from '../../images/expoingenierias.png'


const items = [
  {
    img: AgendaIngenius,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    img: expoIngenierias,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },

      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Agenda y Expoingenierías
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explora la agenda del evento y la página de Expoingenierías, llevada a cabo semestre a semestre por el tec de Monterrey
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  background: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <Box >
                  <img
                    src={item.img}
                    alt="MDN"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                {/* <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div> */}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
