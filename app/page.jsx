import { Bell, Divide, LogIn, Rabbit, Shield } from "lucide-react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { Button } from "@/components/ui/button";
import AddProductForm from "@/components/ui/AddProductForm";
export default function Home() {
  const user = null;
  const product = null;
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
          {/* auth button  */}
          <Button
            variant="default"
            className="  bg-orange-400 hover:bg-orange-600 font-semibold"
          >
            <LogIn />
            Sign In
          </Button>
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-linear-to-br from-orange-200/20  to-gray-100/50 shadow-xl rounded-xl border border-gray-200 flex flex-col items-center px-4 py-8 mx-6 md:mx-0"
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
        </div>
      </section>
    </main>
  );
}
