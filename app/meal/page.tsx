"use client";

import Link from "next/link";
import { useState } from "react";

export default function MealPage() {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [meal, setMeal] = useState("Breakfast");

  function saveMeal() {
    alert("✅ Meal Logged Successfully");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-xl p-8">

        <Link
          href="/athletes/1"
          className="text-orange-500 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          Record Meal
        </h1>

        <p className="mt-2 text-slate-400">
          Mike Johnson
        </p>

        <div className="mt-10 space-y-5">

          <input
            placeholder="Food Name"
            value={food}
            onChange={(e)=>setFood(e.target.value)}
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <input
            placeholder="Quantity"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <select
            value={meal}
            onChange={(e)=>setMeal(e.target.value)}
            className="w-full rounded-xl bg-slate-900 p-4"
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>

          <button
            onClick={saveMeal}
            className="w-full rounded-xl bg-orange-500 p-4 font-bold hover:bg-orange-600"
          >
            Save Meal
          </button>

        </div>

      </div>

    </main>
  );
}