// import { PostDataType } from "data/types";
import React, { FC } from "react";
import Badge from "../../components/Badge/Badge";

// export interface CategoryBadgeListProps {
//   className?: string;
//   itemClass?: string;
//   categories: PostDataType["categories"];
// }

const CategoryBadgeList = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  categories,
}) => {

  const href = "/"
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {/* {categories.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.name}
          href={href}
          color={item.color }
        />
      ))} */}
    </div>
  );
};

export default CategoryBadgeList;
