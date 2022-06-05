import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryItem } from "./CategoryItem";

export const CategoryModule = ({ categories }) => {
  return (
    <div>
      <Grid container spacing="10px">
        {categories?.map((category) => (
          <Grid item xs={6} sm={4} md={3} key={category.id}>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={`/home?categoryId=${category.id}`}
            >
              <CategoryItem category={category} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
