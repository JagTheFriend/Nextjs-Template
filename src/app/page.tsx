"use client";

import { Calendar } from "@heroui/react";
import { parseDate } from "@internationalized/date";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Calendar aria-label="Date (No Selection)" />
      <Calendar
        aria-label="Date (Uncontrolled)"
        defaultValue={parseDate("2020-02-03")}
      />
    </div>
  );
}
