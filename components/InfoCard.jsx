import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

const InfoCard = ({
  img,
  title,
  location,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-300 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p> {location} </p>
          <AiOutlineHeart size={24} className="cursor-pointer" />
        </div>
        <h4 className="text-xl"> {title} </h4>
        <div className="border-b pt-2 w-10" />
        <p className="pt-2 text-sm text-gray-500 flex-grow"> {description} </p>
        <div className="flex justify-between items-end pt-5">
          <p className="text-red-400 flex items-center">
            {" "}
            <AiFillStar className="mr-2" /> {star}{" "}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl"> {price} </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
