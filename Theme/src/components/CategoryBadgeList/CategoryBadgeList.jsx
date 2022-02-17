// import { PostDataType } from "data/types";
import React, { FC } from "react";
import Badge from "../../components/Badge/Badge";

// export interface CategoryBadgeListProps {
//   className?: string;
//   itemClass?: string;
//   categories: PostDataType["categories"];
// }

const CategoryBadgeList = ({
  className = "flex flex-wrap space-x-4 ",
  categories,
}) => {

  const href = ""
 
  return (
   
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
    
        <Badge
          name={categories}
          href={href}
          color="gray"
        />
    
    </div>
  );
};

export default CategoryBadgeList;
