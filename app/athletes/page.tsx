import Link from "next/link";
import { athletes } from "../../data";

export default function AthletesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl p-8">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold">
              Athletes
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your coaching roster
            </p>
          </div>

          <Link
            href="/add-athlete"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
          >
            + New Athlete
          </Link>

        </div>

        <div className="mt-10 space-y-4">

          {athletes.map((athlete) => (

            <div
              key={athlete.id}
              className="rounded-2xl bg-slate-900 p-6 flex items-center justify-between"
            >

              <div>

                <h2 className="text-2xl font-semibold">
                  {athlete.name}
                </h2>

                <p className="mt-2 text-slate-400">
                  {athlete.goal}
                </p>

                <p className="text-slate-500">
                  Weight: {athlete.weight}
                </p>

              </div>

              <div className="text-right">

                <p className="text-green-400 text-3xl font-bold">
                  {athlete.compliance}%
                </p>

                <p className="text-slate-400">
                  Compliance
                </p>

                <Link
                  href="/athlete"
                  className="mt-4 inline-block rounded-xl border border-orange-500 px-5 py-2 hover:bg-orange-500"
                >
                  Open Profile →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}