import Link from "next/link";

export default function DietPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <Link
        href="/athlete"
        className="text-orange-500 hover:underline"
      >
        ← Back
      </Link>

      <h1 className="mt-6 text-5xl font-bold">
        Today's Diet
      </h1>

      <div className="mt-10 space-y-6">

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Breakfast
          </h2>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>🥚 3 Eggs</li>
            <li>🥣 100g Oats</li>
            <li>🍌 Banana</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Lunch
          </h2>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>🍗 200g Chicken</li>
            <li>🍚 Rice</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Dinner
          </h2>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>🐟 Salmon</li>
            <li>🥦 Vegetables</li>
          </ul>
        </div>

      </div>

    </main>
  );
}