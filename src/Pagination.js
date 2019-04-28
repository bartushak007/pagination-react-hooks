import React from "react";
import GoLeft from "./GoLeft";
import GoRight from "./GoRight";
import PageItem from "./PageItem";

const Pagination = ({ children }) => (
  <>
    <div className="pagination">{children}</div>
  </>
);

Pagination.GoLeft = GoLeft;
Pagination.GoRight = GoRight;
Pagination.PageItem = PageItem;

export default Pagination;
