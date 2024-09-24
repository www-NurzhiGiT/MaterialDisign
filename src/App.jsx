import React from "react";

import Button from "@mui/material/Button";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 1,
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.white,
    marginBottom: "4",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: "3",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7];
function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuRoundedIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Web Developer Blog
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log In
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur quos mollitia ea et praesentium ab dolore
                    delectus sed nobis reprehenderit, temporibus enim
                    distinctio, ipsa totam?
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Blog
            </Typography>
            <Typography
              variant="h2"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              deleniti quos quaerat impedit temporibus sequi reprehenderit,
              totam, consequuntur mollitia neque esse vel molestias odio aut sed
              ex suscipit. Quia et minima animi quas dolores deleniti. Sit quo
              atque aperiam culpa eaque dolore numquam maxime labore ut quam!
              Doloribus natus sapiente placeat impedit quos adipisci excepturi
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid iten>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid iten>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs="12" sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Blog post. Web Developer blog Web Developer blog
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary">
                      X
                    </Button>
                    {/* <LayerIcon /> */}
                    {/* <PlayCirkcleFilledIcon /> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
