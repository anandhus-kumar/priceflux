"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const AddProductForm = ({ user }) => {
  const [productURL, setProductURL] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className=" flex flex-col sm:flex-row gap-3 ">
        <Input
          type="url"
          placeholder="Paste Product URL"
          value={productURL}
          onChange={(e) => setProductURL(e.target.value)}
          className="h-12 text-base"
          required
          disabled={loading}
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-auto h-auto py-3 sm:px-6 bg-gradient-to-r from-orange-500 via-[#FFC837]/80 to-orange-500 transition-all duration-500 hover:bg-position-[right_center] bg-[length:200%_auto] "
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding....
            </>
          ) : (
            "Track Price"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
