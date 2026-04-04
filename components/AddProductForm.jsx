"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { addProduct } from "@/app/auth/callback/actions";
import { toast } from "sonner";

const AddProductForm = ({ user }) => {
  const [productURL, setProductURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("url", productURL);
    const result = await addProduct(formData);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message || "Product tracked successfully");
      setProductURL("");
    }
    setLoading(false);
  };
  return (
    <>
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
      {/* 
    //  ?  Auth Model */}

      <AuthModal
        isOpen={showAuthModal}
        onClose={(open) => setShowAuthModal(open)}
      />
    </>
  );
};

export default AddProductForm;
