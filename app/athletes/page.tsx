import Link from "next/link";
import { athletes } from "../../data";

export default function AthletesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl p-8">

        {/* Back */}
        <Link
          href="/coach"
          className="text-orange-500 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mt-6 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              Athletes
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your athlete roster.
            </p>
          </div>

          <Link
            href="/add-athlete"
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600"
          >
            + Add Athlete
          </Link>

        </div>

        {/* Athlete Cards */}
        <div className="mt-10 space-y-4">

          {athletes.map((athlete) => (

            <div
              key={athlete.id}
              className="rounded-2xl bg-slate-900 p-6"
            >

              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    {athlete.firstName} {athlete.lastName}
                  </h2>

                  <p className="mt-1 text-slate-400">
                    {athlete.goal}
                  </p>

                </div>

                <div className="flex flex-wrap items-center gap-6">

                  <div>
                    <p className="text-xs text-slate-500">
                      Current Weight
                    </p>

                    <p className="font-semibold">
                      {athlete.currentWeight} kg
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Target
                    </p>

                    <p className="font-semibold">
                      {athlete.targetWeight} kg
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Compliance
                    </p>

                    <p className="font-semibold text-green-400">
                      {athlete.compliance}%
                    </p>
                  </div>

                  <div>
                    {athlete.checkedIn ? (
                      <span className="rounded-full bg-green-900 px-4 py-2 text-sm text-green-300">
                        ✓ Checked In
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-400">
                        Not Checked In
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/athletes/${athlete.id}`}
                    className="rounded-xl border border-orange-500 px-5 py-2 font-semibold text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Open Profile
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}