"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addFood } from "@/lib/demoStorage";

const suggestedFoods = [
  "Chicken Breast",
  "Eggs",
  "Rice",
  "Banana",
  "Oats",
  "Salmon",
  "Greek Yogurt",
  "Blueberries",
];

export default function AddFoodPage() {
  const router = useRouter();

  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("100g");
  const [meal, setMeal] = useState("Breakfast");

  function handleSave() {
    if (!food) {
      alert("Please choose a food.");
      return;
    }

    addFood({
      meal,
      name: food,
      quantity,
    });

    router.push("/nutrition");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-4xl p-8">

        <Link
          href="/nutrition"
          className="text-orange-500 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          Add Food
        </h1>

        <p className="mt-2 text-slate-400">
          Select a food for the athlete's meal.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Food
              </label>

              <input
                value={food}
                onChange={(e) => setFood(e.target.value)}
                placeholder="Chicken Breast"
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Quantity
              </label>

              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="100g"
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Meal
              </label>

              <select
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                className="w-full rounded-xl bg-slate-900 p-4 outline-none"
              >
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snacks</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="w-full rounded-xl bg-orange-500 p-4 font-bold hover:bg-orange-600"
            >
              Add Food
            </button>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="text-2xl font-bold">
              Suggested Foods
            </h2>

            <div className="mt-5 space-y-3">

              {suggestedFoods.map((item) => (

                <button
                  key={item}
                  onClick={() => setFood(item)}
                  className="w-full rounded-xl bg-slate-900 p-4 text-left transition hover:bg-slate-800"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}