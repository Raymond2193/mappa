import { useState } from "react";
import { Button, Card, Input } from "../components";

const DATE_MODES = ["Before", "Around", "After"];

const RADIUS_OPTIONS = ["5 mi", "10 mi", "15 mi", "25 mi"];

export default function SearchPage() {
  const [dateMode, setDateMode] = useState("Around");

  return (
    <div className="flex h-[calc(100vh-3.5rem)] p-6 gap-6">
      <Card className="w-80 flex-shrink-0 overflow-y-auto flex flex-col gap-4 h-full">
        <p className="text-sm font-semibold text-slate-700">Search Parameters</p>

        <Input
          label="Client address"
          id="address"
          type="text"
          placeholder="123 Main St, City, State"
        />

        <div>
          <label htmlFor="radius" className="block text-xs font-medium text-slate-600 mb-1">
            Search radius
          </label>
          <select
            id="radius"
            className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand appearance-none"
          >
            {RADIUS_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <Input
          label="Results per group"
          id="results-per-group"
          type="number"
          placeholder="3"
        />

        <hr className="border-border-subtle" />

        <div>
          <p className="text-xs font-medium text-slate-600 mb-2">Date preference</p>
          <div className="flex gap-1">
            {DATE_MODES.map((mode) => (
              <Button
                key={mode}
                variant={dateMode === mode ? "primary" : "secondary"}
                size="sm"
                onClick={() => setDateMode(mode)}
                className="flex-1"
              >
                {mode}
              </Button>
            ))}
          </div>
        </div>

        <Input
          label="Target date"
          id="target-date"
          type="date"
        />

        <Button variant="primary" size="md" className="w-full mt-auto">
          Search
        </Button>
      </Card>

      <div className="flex-1 flex">
        <Card className="flex-1 flex flex-col items-center justify-center min-h-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl select-none">
              📍
            </div>
            <p className="text-slate-400 text-sm font-medium">Search results will appear here</p>
            <p className="text-slate-300 text-xs">Enter an address and click Search to begin</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
