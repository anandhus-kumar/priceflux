import { Bell, Rabbit, Shield, TrendingDown } from "lucide-react";
import Image from "next/image";
import Logo from "../public/logo.png";
import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { getProducts } from "./auth/callback/actions";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const product = user ? await getProducts() : [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-100 via-white to-orange-100">
      <header className="bg-white/50 backdrop-blur-sm border-b border-gray-200 sticky  top-0 z-10">
        <div className=" max-w-7xl mx-auto px-4 py-2 flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="logo"
              width={600}
              height={200}
              className="h-14 sm:h-16 md:h-18 w-auto"
            />
          </div>

          {/* //*--------- auth button ------  */}

          <AuthButton user={user} />
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="bg-gradient-to-r from-orange-200 via-white to-orange-200
    font-semibold shadow-md text-black
    rounded-2xl w-fit mx-auto px-4 py-1 text-sm mb-6
    transition-all duration-300
    hover:scale-[1.05]
    bg-[length:200%_auto]
    hover:bg-[position:right_center]"
          >
            {" "}
            <a href="https://github.com/anandhus-kumar">
              Made by Anandhu.dev❤️
            </a>
          </div>
          <h2 className="md:text-5xl text-4xl  font-bold text-gray-900 mb-4 tracking-tight">
            {" "}
            Your Smart Price Tracking Companion
          </h2>
          <p className="md:text-xl text-lg text-gray-800 mb-12 max-w-xl mx-auto mt-5 tracking-tighter">
            Stay ahead of price drops with automated tracking and real-time
            insights across your favorite products.
          </p>

          {/* Add product form */}
          <AddProductForm user={user} />

          {/* features */}

          {product.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 ">
              {FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="bg-linear-to-br from-orange-200/20 transition-all duration-300 hover:scale-[1.1]
                 to-gray-100/50 shadow-xl rounded-xl border border-gray-200 flex flex-col items-center px-4 py-8 mx-6 md:mx-0"
                >
                  <div
                    className="w-12 h-12 bg-linear-to-br from-orange-300/80  to-gray-100 rounded-lg 
                flex items-center justify-center mb-4 "
                  >
                    <item.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {user && product.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-20 ">
          <div className="flex items-center justify-between mb-6 border-b pb-3">
            <h3 className="sm:text-lg text-md">Your Tracked Products</h3>
            <span className="sm:text-lg text-md text-gray-500">
              {product.length} {product.length === 1 ? "Product" : "Products"}
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {product.map((prd) => (
              <ProductCard key={prd.id} product={prd} />
            ))}
          </div>
        </section>
      )}

      {user && product.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
            <TrendingDown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Products Yet
            </h3>
            <p className="text-gray-600">
              Add your first product above to start tracking prices!
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
