"use client";
import React from "react";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import TableTwo from "../Tables/TableTwo";
import CardDataStats from "../CardDataStats";


const ECommerce = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <TableOne />
        </div>
        <div className="col-span-12">
          <TableTwo />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
