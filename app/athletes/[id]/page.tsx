import Link from "next/link";
import { notFound } from "next/navigation";
import { athletes } from "../../../data";

export default async function AthleteProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get athlete id from the URL
  const { id } = await params;

  // Find the correct athlete from demo data
  const athlete = athletes.find(
    (item) => item.id === Number(id)
  );

  // If no athlete is found, show Next.js 404 page
  if (!athlete) {
    notFound();
  }

  // Demo values for now
  const protein = 175;
  const proteinGoal = 180;

  const caloriePercent = Math.min(
    Math.round((athlete.calories / athlete.calorieGoal) * 100),
    100
  );

  const proteinPercent = Math.min(
    Math.round((protein / proteinGoal) * 100),
    100
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl p-6 md:p-8">

        {/* Back button */}
        <Link
          href="/athletes"
          className="text-orange-500 hover:text-orange-400"
        >
          ← Back to Athletes
        </Link>

        {/* Athlete heading */}
        <div className="mt-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            {athlete.firstName} {athlete.lastName}
          </h1>

          <p className="mt-2 text-slate-400">
            {athlete.goal}
          </p>
        </div>

        {/* Main stats */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Current Weight
            </p>

            <p className="mt-3 text-4xl font-bold">
              {athlete.currentWeight} kg
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Target Weight
            </p>

            <p className="mt-3 text-4xl font-bold">
              {athlete.targetWeight} kg
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Nutrition Compliance
            </p>

            <p className="mt-3 text-4xl font-bold text-green-400">
              {athlete.compliance}%
            </p>
          </div>

        </div>

        {/* Today's progress */}
        <section className="mt-8 rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Today&apos;s Progress
          </h2>

          {/* Calories */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">
                Calories
              </span>

              <span className="font-semibold">
                {athlete.calories} / {athlete.calorieGoal} kcal
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${caloriePercent}%` }}
              />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              {caloriePercent}% of daily target
            </p>
          </div>

          {/* Protein */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">
                Protein
              </span>

              <span className="font-semibold">
                {protein} / {proteinGoal} g
              </span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-green-500"
                style={{ width: `${proteinPercent}%` }}
              />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              {proteinPercent}% of daily target
            </p>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/nutrition"
              className="rounded-2xl bg-orange-500 p-5 font-semibold transition hover:bg-orange-600"
            >
              🥗 Nutrition
            </Link>

            <Link
              href="/meal"
              className="rounded-2xl bg-slate-900 p-5 font-semibold transition hover:bg-slate-800"
            >
              🍽 Record Meal
            </Link>

            <Link
              href="/checkin"
              className="rounded-2xl bg-slate-900 p-5 font-semibold transition hover:bg-slate-800"
            >
              📷 Check In
            </Link>

            <button
              className="rounded-2xl bg-slate-900 p-5 text-left font-semibold transition hover:bg-slate-800"
            >
              📝 Coach Notes
            </button>

          </div>
        </section>

        {/* Recent activity */}
        <section className="mt-8 rounded-2xl bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-xl bg-slate-800 p-4">
              ✅ Breakfast logged
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              ✅ Athlete checked in
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              ⚖ Weight updated to {athlete.currentWeight} kg
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}