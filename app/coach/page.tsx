import Link from "next/link";
import { athletes } from "../../data";

export default function CoachPage() {
  // Dashboard statistics
  const totalAthletes = athletes.length;

  const checkedIn = athletes.filter(
    (athlete) => athlete.checkedIn
  ).length;

  const averageCompliance = Math.round(
    athletes.reduce(
      (total, athlete) => total + athlete.compliance,
      0
    ) / athletes.length
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800">

        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">

          <div>
            <h1 className="text-3xl font-bold">
              Combat Athlete
            </h1>

            <p className="text-slate-400">
              Today's Overview
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              href="/checkin"
              className="rounded-xl bg-green-600 px-5 py-3 font-semibold hover:bg-green-700"
            >
              📷 Check In
            </Link>

            <Link
              href="/athletes"
              className="rounded-xl bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600"
            >
              👥 Athletes
            </Link>

          </div>

        </div>

      </div>

      {/* Main Content */}

      <div className="mx-auto max-w-7xl p-8">

        <h2 className="mb-8 text-4xl font-bold">
          Good Morning Coach 👋
        </h2>

        {/* Dashboard Cards */}

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">
              Athletes
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {totalAthletes}
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">
              Checked In
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {checkedIn}
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">
              Avg Compliance
            </p>

            <h2 className="mt-4 text-5xl font-bold text-green-400">
              {averageCompliance}%
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">
              Meals Logged
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              37
            </h2>

          </div>

        </div>

        {/* Recent Athletes */}

        <div className="mt-12">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-3xl font-bold">
              Recent Athletes
            </h2>

            <Link
              href="/add-athlete"
              className="rounded-xl bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600"
            >
              + New Athlete
            </Link>

          </div>

          <div className="space-y-4">

            {athletes.map((athlete) => (

              <div
                key={athlete.id}
                className="flex items-center justify-between rounded-2xl bg-slate-900 p-6"
              >

                <div>

                  <h3 className="text-2xl font-semibold">
                    {athlete.firstName} {athlete.lastName}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {athlete.goal}
                  </p>

                </div>

                <div className="flex items-center gap-6">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      athlete.checkedIn
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {athlete.checkedIn ? "Checked In" : "Not Checked In"}
                  </span>

                  <span className="text-2xl font-bold">
                    {athlete.compliance}%
                  </span>

                  <Link
                    href={`/athletes/${athlete.id}`}
                    className="rounded-xl border border-orange-500 px-5 py-3 hover:bg-orange-500"
                  >
                    Open Profile →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}