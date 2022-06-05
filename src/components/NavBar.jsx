import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export const NavBar = ({ title }) => {
  return (
    <AppBar position="sticky" style={{ background: "#C8C8C8", color: "black" }}>
      <Container>
        <Toolbar>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
