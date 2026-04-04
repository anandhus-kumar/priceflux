"use client";

import React, { useState } from "react";

import { deleteProduct } from "@/app/auth/callback/actions";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  TrendingDown,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete(id) {
    if (!confirm("Remove this product from tracking")) return;
    setDeleting(true);

    const res = await deleteProduct(id);
    if (res.success) {
      toast.success("Product deleted");
    } else {
      toast.error("error:Try after Sometime");
    }
    setDeleting(false);
  }
  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className={"pb-3"}>
          <div className="flex gap-4   ">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-28 h-28 object-cover rounded-md border"
            />
            <div className="flex-1 min-w-0">
              {" "}
              <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                {product.name}
              </h3>{" "}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-orange-500">
                  {product.currency} {product.current_price}
                </span>

                <Badge variant="secondary" className="gap-1">
                  <TrendingDown className="w-3 h-3" /> Tracking
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChart(!showChart)}
            >
              {showChart ? (
                <>
                  <ChevronUp /> Hide Chart{" "}
                </>
              ) : (
                <>
                  {" "}
                  <ChevronDown /> Show Chart
                </>
              )}
            </Button>

            <Button variant="outline" size="sm" aschild className="gap-1 ">
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex gap-1 justify-center items-center">
                  <ExternalLink /> View Product
                </span>
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
