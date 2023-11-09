import React, { ReactElement } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Rating({
  children,
  rating,
  name,
}: {
  children: ReactElement;
  rating: number;
  name: string;
}) {
  const filledStars = new Array(rating)
    .fill(null)
    .map((_, index) => <AiFillStar key={`fill-${index}`} color="#fab007" />);
  const outlinedStars = new Array(5 - rating)
    .fill(null)
    .map((_, index) => <AiOutlineStar key={`outline-${index}`} />);

  const sizeClass = "w-[60px] h-[60px]";

  // React.Children.mapを使用して、childrenに新しいpropsを渡す
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: `${child.props.className || ""} ${sizeClass}`,
    }),
  );

  return (
    <div className="flex items-center justify-center md:items-start md:justify-normal">
      <div className="h-[70px] w-[70px] rounded-[5px] border-[1px] p-[4px]">
        {childrenWithProps}
      </div>
      <div className="flex-col pl-[36px] md:pl-[16px]">
        <p className="pt-[12px] text-center font-semibold">{name}</p>
        <div className="flex">
          {filledStars}
          {outlinedStars}
        </div>
      </div>
    </div>
  );
}
