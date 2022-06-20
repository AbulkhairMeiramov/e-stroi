import { CategoryModule } from "../components/CategoryModule";
import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../store/actions/loadCategories";
import { useSearchParams } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { Container } from "@mui/system";
import { Slider } from "../components/Slider";

function findNode(id, category) {
  if (category?.id + "" === id + "") {
    return category;
  }
  if (category?.childCategories) {
    for (let childCategory of category.childCategories) {
      const node = findNode(id, childCategory);
      if (node) {
        return node;
      }
    }
  }
}

function getCategoryPath(id, category) {
  const node = findNode(id, category);
  if (!id || !node) {
    return [category];
  }
  return [...getCategoryPath(node.parentId, category), node];
}

export const HomePage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.shop);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const currentCategory = useMemo(() => {
    if (!categoryId || !category) return category;
    return findNode(+categoryId, category);
  }, [category, categoryId]);

  const links = useMemo(() => {
    if (!category) return [];
    return getCategoryPath(categoryId, category).map((category) => ({
      label: category.name,
      to: category.id ? "/home?categoryId=" + category.id : "/home",
    }));
  }, [categoryId, category]);

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <Container>
        <Slider />
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <BreadCrumbs links={links} />
        </div>
        {currentCategory?.childCategories ? (
          <CategoryModule categories={currentCategory?.childCategories} />
        ) : (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: "#636363",
              marginLeft: "35%",
              marginTop: "10%",
            }}
          >
            <img
              style={{ width: "271px" }}
              src="no-content.png"
              alt="no subcategory"
            />
            <h1>Нет подкатегории</h1>
          </div>
        )}
      </Container>
    </div>
  );
};
