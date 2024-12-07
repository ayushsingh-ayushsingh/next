"use client";
import Link from "next/link";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <Link href="/users">
        <button className="btn btn-accent rounded-sm">
          Go to /users
        </button>
      </Link>
    </div>
  );
};

export default AddToCart;
