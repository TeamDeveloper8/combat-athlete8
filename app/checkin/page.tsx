"use client";

import Link from "next/link";
import { useState } from "react";
import { athletes } from "../../data";

export default function CheckInPage() {
  // Stores the athlete selected by the simulated QR scan.
  const [selectedAthleteId, setSelectedAthleteId] = useState<number | null>(
    null
  );

  // Stores whether the selected athlete was checked in.
  const [checkInComplete, setCheckInComplete] = useState(false);

  const selectedAthlete = athletes.find(
    (athlete) => athlete.id === selectedAthleteId
  );

  function simulateScan(athleteId: number) {
    setSelectedAthleteId(athleteId);
    setCheckInComplete(false);
  }

  function completeCheckIn() {
    if (!selectedAthlete) {
      return;
    }

    setCheckInComplete(true);
  }

  function resetScanner() {
    setSelectedAthleteId(null);
    setCheckInComplete(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/coach"
          className="text-orange-500 hover:text-orange-400"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-6">
          <h1 className="text-4xl font-bold md:text-5xl">
            Athlete Check-In
          </h1>

          <p className="mt-2 text-slate-400">
            Scan an athlete QR code to record attendance.
          </p>
        </div>

        {/* QR scanner demonstration area */}
        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950 p-8 text-center">
            <div className="text-6xl">📷</div>

            <h2 className="mt-4 text-2xl font-bold">
              QR Scanner
            </h2>

            <p className="mt-2 max-w-md text-slate-400">
              For this demo, select an athlete below to simulate scanning their
              permanent QR membership code.
            </p>
          </div>

          {/* Demo QR choices */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">
              Simulate QR Scan
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {athletes.map((athlete) => (
                <button
                  key={athlete.id}
                  onClick={() => simulateScan(athlete.id)}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 text-left transition hover:border-orange-500"
                >
                  <span className="block font-semibold">
                    {athlete.firstName} {athlete.lastName}
                  </span>

                  <span className="mt-1 block text-sm text-slate-400">
                    ATH-{String(athlete.id).padStart(4, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected athlete */}
        {selectedAthlete && !checkInComplete && (
          <section className="mt-6 rounded-2xl border border-orange-500/40 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              QR Code Recognized
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {selectedAthlete.firstName} {selectedAthlete.lastName}
            </h2>

            <p className="mt-2 text-slate-400">
              {selectedAthlete.goal}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={completeCheckIn}
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
              >
                Confirm Check-In
              </button>

              <button
                onClick={resetScanner}
                className="rounded-xl bg-slate-800 px-6 py-3 font-semibold transition hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          </section>
        )}

        {/* Successful check-in */}
        {selectedAthlete && checkInComplete && (
          <section className="mt-6 rounded-2xl border border-green-700 bg-green-950/40 p-8 text-center">
            <div className="text-6xl">✅</div>

            <h2 className="mt-4 text-3xl font-bold">
              Check-In Complete
            </h2>

            <p className="mt-2 text-green-300">
              {selectedAthlete.firstName} {selectedAthlete.lastName} has been
              checked in successfully.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={`/athletes/${selectedAthlete.id}`}
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
              >
                Open Athlete Profile
              </Link>

              <button
                onClick={resetScanner}
                className="rounded-xl bg-slate-800 px-6 py-3 font-semibold hover:bg-slate-700"
              >
                Scan Another Athlete
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}