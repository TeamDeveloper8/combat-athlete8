"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddAthletePage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [goal, setGoal] = useState("Performance");
  const [notes, setNotes] = useState("");

  function handleSave() {
    if (!firstName || !lastName) {
      alert("Please enter first and last name.");
      return;
    }

    // Save temporarily in browser
    localStorage.setItem(
      "newAthlete",
      JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        weight,
        goalWeight,
        goal,
        notes,
      })
    );

    router.push("/athletes");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl p-8">

        <Link
          href="/athletes"
          className="text-orange-500 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          New Athlete
        </h1>

        <p className="mt-2 text-slate-400">
          Add an athlete to your roster.
        </p>

        <div className="mt-10 space-y-5">

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="Current Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            className="w-full rounded-xl bg-slate-900 p-4"
            placeholder="Goal Weight"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
          />

          <select
            className="w-full rounded-xl bg-slate-900 p-4"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option>Performance</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Competition Prep</option>
          </select>

          <textarea
            className="h-32 w-full rounded-xl bg-slate-900 p-4"
            placeholder="Coach Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            onClick={handleSave}
            className="w-full rounded-xl bg-orange-500 p-4 font-bold hover:bg-orange-600"
          >
            Save Athlete
          </button>

        </div>

      </div>
    </main>
  );
}