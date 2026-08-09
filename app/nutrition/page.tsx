"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFoods, DemoFood } from "@/lib/demoStorage";

export default function NutritionPage() {
  const [foods, setFoods] = useState<DemoFood[]>([]);

  useEffect(() => {
    setFoods(getFoods());
  }, []);

  function mealFoods(meal: string) {
    return foods.filter((f) => f.meal === meal);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl p-8">

        <Link
          href="/athletes/1"
          className="text-orange-500 hover:underline"
        >
          ← Back to Athlete
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          Nutrition Plan
        </h1>

        <p className="mt-2 text-slate-400">
          Mike Johnson
        </p>

        {/* Targets */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <StatCard
            title="Calories Target"
            value="2200 kcal"
          />

          <StatCard
            title="Protein Target"
            value="180 g"
          />

          <StatCard
            title="Water Goal"
            value="3.5 L"
          />

        </div>

        <MealSection
          title="🍳 Breakfast"
          foods={mealFoods("Breakfast")}
        />

        <MealSection
          title="🍗 Lunch"
          foods={mealFoods("Lunch")}
        />

        <MealSection
          title="🥩 Dinner"
          foods={mealFoods("Dinner")}
        />

        <MealSection
          title="🍎 Snacks"
          foods={mealFoods("Snacks")}
        />

        <div className="mt-10">

          <Link
            href="/nutrition/add-food"
            className="rounded-xl bg-orange-500 px-6 py-4 font-semibold hover:bg-orange-600"
          >
            + Add Food
          </Link>

        </div>

      </div>

    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}

function MealSection({
  title,
  foods,
}: {
  title: string;
  foods: DemoFood[];
}) {
  return (
    <div className="mt-10 rounded-2xl bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      {foods.length === 0 ? (

        <p className="mt-6 text-slate-500">
          No foods added yet.
        </p>

      ) : (

        <div className="mt-6 space-y-4">

          {foods.map((food, index) => (

            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >

              <div>

                <h3 className="text-lg font-semibold">
                  {food.name}
                </h3>

                <p className="text-slate-400">
                  {food.quantity}
                </p>

              </div>

              <div className="flex gap-2">

                <button
                  className="rounded bg-blue-600 px-3 py-2 text-sm hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  className="rounded bg-red-600 px-3 py-2 text-sm hover:bg-red-700"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}