import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const CategoryItem = ({ category }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        background: "#EAEAEA",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ display: "flex" }}>
          <Typography>{category.name}</Typography>
          <Typography
            sx={{
              background: "#ABABAB",
              borderRadius: "50%",
              marginLeft: "auto",
              padding: "5px",
              width: '19px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {category.childCount}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
