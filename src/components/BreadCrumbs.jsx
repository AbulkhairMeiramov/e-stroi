import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BreadCrumb = styled(Link)`
  font-size: 20px;
  color: #636363;
`;

export const Text = styled.span`
  font-size: 20px;
  color: #636363;
`;

export const Arrow = styled.span`
  font-size: 20px;
  color: #636363;
  margin-left: 8px;
  margin-right: 8px;
`;

export const BreadCrumbs = ({ links }) => {
  return links.map((link, index) => {
    if (index < links.length - 1) {
      return (
        <>
          <BreadCrumb to={link.to}>{link.label}</BreadCrumb>
          <Arrow> > </Arrow>
        </>
      );
    }
    return <Text>{link.label}</Text>;
  });
};
