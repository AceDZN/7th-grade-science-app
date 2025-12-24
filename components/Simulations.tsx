import React, { useState, useEffect } from "react";

export const VolumeSimulation: React.FC = () => {
  const [l, setL] = useState(5);
  const [w, setW] = useState(4);
  const [h, setH] = useState(3);

  const volume = l * w * h;

  return (
    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-10 items-center shadow-sm">
      <div className="flex-1 space-y-6 w-full">
        <h4 className="font-black text-2xl mb-4 text-blue-900">
          חישוב נפח תיבה הנדסית
        </h4>
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-blue-200 shadow-inner">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">אורך (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {l}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={l}
              onChange={(e) => setL(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">רוחב (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {w}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={w}
              onChange={(e) => setW(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-slate-900 font-bold">גובה (ס"מ)</label>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-black">
                {h}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
        <div className="mt-6 p-6 bg-blue-600 text-white rounded-2xl shadow-lg border-b-4 border-blue-800 text-center">
          <p className="text-2xl font-black">
            נפח כולל: {l} × {w} × {h} = {volume} סמ"ק (מ"ל)
          </p>
        </div>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center border-4 border-dashed border-blue-200 rounded-3xl bg-white shadow-xl overflow-hidden">
        <div
          className="bg-blue-500 opacity-80 transition-all duration-300 rounded shadow-2xl relative"
          style={{
            width: l * 15,
            height: h * 15,
            transform: `perspective(500px) rotateX(15deg) rotateY(-15deg)`,
            borderBottom: `${w * 4}px solid #1e40af`,
            borderRight: `${w * 2}px solid #1e3a8a`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xs opacity-50">
            תיבה
          </div>
        </div>
      </div>
    </div>
  );
};

export const DisplacementSimulation: React.FC = () => {
  const [isInside, setIsInside] = useState(false);
  const initialWater = 50;
  const objectVolume = 15;

  return (
    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col items-center gap-8 shadow-sm">
      <h4 className="font-black text-2xl text-emerald-900">
        מדידת נפח בשיטת דחיקת המים
      </h4>
      <div className="flex flex-col md:flex-row gap-16 items-center h-full w-full justify-center py-8">
        <div className="relative w-28 h-72 bg-white border-x-8 border-b-8 border-slate-300 rounded-b-3xl overflow-hidden flex flex-col justify-end shadow-inner">
          <div
            className="w-full bg-blue-400 transition-all duration-1000 relative"
            style={{
              height: `${initialWater + (isInside ? objectVolume : 0)}%`
            }}
          >
            {isInside && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-sm font-black text-white shadow-lg animate-bounce">
                אבן
              </div>
            )}
          </div>
          <div className="absolute inset-0 flex flex-col justify-between py-4 pr-3 pointer-events-none">
            {[100, 80, 60, 40, 20, 0].map((v) => (
              <div key={v} className="flex items-center gap-2">
                <div className={`h-0.5 bg-slate-400 w-5`}></div>
                <span className="text-[12px] font-black text-slate-600">
                  {v} מ"ל
                </span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsInside(!isInside)}
          className={`text-white font-black py-5 px-8 rounded-2xl shadow-xl transition-all text-xl ${
            isInside ? "bg-red-500" : "bg-emerald-600"
          }`}
        >
          {isInside ? "הוצא את האבן" : "הטבל את האבן"}
        </button>
      </div>
    </div>
  );
};

export const GravitySimulation: React.FC = () => {
  const [mass, setMass] = useState(60);
  const factors = { earth: 1, moon: 0.165, mars: 0.377, jupiter: 2.528 };

  return (
    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
      <h4 className="font-black text-2xl mb-6 text-indigo-900 text-center">
        סימולטור משקל בפלנטות שונות
      </h4>
      <div className="max-w-md mx-auto mb-8">
        <label className="block text-slate-700 font-bold mb-2">
          בחר מסה של הגוף (ק"ג):
        </label>
        <input
          type="range"
          min="1"
          max="200"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <p className="text-center text-2xl font-black text-indigo-700 mt-2">
          {mass} ק"ג
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(factors).map(([planet, factor]) => (
          <div
            key={planet}
            className="bg-white p-4 rounded-2xl text-center shadow-sm border border-indigo-50"
          >
            <span className="mb-2 block">
              <img
                src={`https://api.iconify.design/fluent-emoji/${
                  planet === "earth"
                    ? "globe-showing-americas"
                    : planet === "moon"
                    ? "first-quarter-moon"
                    : planet === "mars"
                    ? "red-circle"
                    : "ringed-planet"
                }.svg`}
                alt={planet}
                className="w-10 h-10 mx-auto"
              />
            </span>
            <p className="font-bold text-slate-500 capitalize">
              {planet === "earth"
                ? "כדור הארץ"
                : planet === "moon"
                ? "ירח"
                : planet === "mars"
                ? "מאדים"
                : "צדק"}
            </p>
            <p className="text-xl font-black text-indigo-900">
              {(mass * 10 * factor).toFixed(1)} N
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FloatingExperiment: React.FC = () => {
  const [density, setDensity] = useState(0.8);
  const waterDensity = 1.0;

  return (
    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 shadow-sm flex flex-col items-center">
      <h4 className="font-black text-2xl mb-6 text-sky-900">
        ניסוי: מי יצוף ומי ישקע?
      </h4>
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl mb-8 shadow-inner">
        <label className="block text-slate-700 font-bold mb-2">
          צפיפות החומר (גרם/סמ"ק):
        </label>
        <input
          type="range"
          min="0.1"
          max="2.0"
          step="0.1"
          value={density}
          onChange={(e) => setDensity(Number(e.target.value))}
          className="w-full accent-sky-600"
        />
        <p className="text-center text-2xl font-black text-sky-700 mt-2">
          {density} גרם/סמ"ק
        </p>
      </div>

      <div className="relative w-full h-48 bg-blue-100 rounded-2xl border-b-8 border-blue-300 overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-amber-600 rounded-lg flex items-center justify-center text-white font-black transition-all duration-700 border-2 border-amber-800 shadow-lg"
          style={{ top: density > waterDensity ? "100px" : "10px" }}
        >
          {density > waterDensity ? "שוקע" : "צף"}
        </div>
        <div className="absolute bottom-0 w-full h-2/3 bg-blue-400 opacity-40"></div>
      </div>
    </div>
  );
};

export const CompressionSimulation: React.FC = () => {
  const [pressure, setPressure] = useState(0);
  const [matterState, setMatterState] = useState<"gas" | "liquid" | "solid">(
    "gas"
  );

  const getVolume = () => {
    switch (matterState) {
      case "gas":
        return 100 - pressure * 0.7;
      case "liquid":
        return 100 - pressure * 0.05;
      case "solid":
        return 100 - pressure * 0.01;
    }
  };

  const volume = getVolume();

  return (
    <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-orange-900">ניסוי דחיסה במזרק</h4>
      <div className="flex gap-3 mb-4 flex-wrap justify-center">
        <button
          onClick={() => {
            setMatterState("gas");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "gas"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border border-purple-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
            alt="gas"
            className="w-5 h-5"
          />{" "}
          גז (אוויר)
        </button>
        <button
          onClick={() => {
            setMatterState("liquid");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "liquid"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          נוזל (מים)
        </button>
        <button
          onClick={() => {
            setMatterState("solid");
            setPressure(0);
          }}
          className={`px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            matterState === "solid"
              ? "bg-slate-600 text-white"
              : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/ice.svg"
            alt="ice"
            className="w-5 h-5"
          />{" "}
          מוצק
        </button>
      </div>

      <div className="relative w-80 h-32 bg-slate-200 rounded-r-lg border-y-4 border-r-4 border-slate-400 flex items-center">
        <div className="absolute left-0 w-full h-full bg-white opacity-40"></div>
        <div
          className="absolute h-full bg-slate-500 w-4 transition-all duration-300 z-20"
          style={{ left: `${volume}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-20 h-4 bg-slate-400"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-4 h-16 bg-slate-600 rounded-l-lg"></div>
        </div>
        <div
          className={`h-full transition-all duration-300 ${
            matterState === "gas"
              ? "bg-purple-100"
              : matterState === "liquid"
              ? "bg-blue-400"
              : "bg-slate-500"
          }`}
          style={{ width: `${volume}%` }}
        >
          {matterState === "gas" &&
            Array.from({ length: Math.floor(15 * (volume / 100)) }).map(
              (_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * (volume - 10) + 5}%`
                  }}
                ></div>
              )
            )}
          {matterState === "liquid" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-60">
                נוזל
              </span>
            </div>
          )}
          {matterState === "solid" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-60">
                מוצק
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-sm">
        <label className="block text-slate-700 font-bold mb-2 text-center">
          הפעל לחץ על הבוכנה
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={pressure}
          onChange={(e) => setPressure(Number(e.target.value))}
          className="w-full accent-orange-600"
        />
      </div>

      <div
        className={`p-4 rounded-xl text-center ${
          matterState === "gas"
            ? "bg-purple-100 text-purple-800"
            : matterState === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-slate-200 text-slate-800"
        }`}
      >
        {matterState === "gas" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
                  alt="gas"
                  className="w-5 h-5"
                />{" "}
                הגז נדחס בקלות! המרווחים בין החלקיקים קטנים.
              </>
            ) : (
              "הפעל לחץ כדי לראות את הגז נדחס"
            )}
          </p>
        )}
        {matterState === "liquid" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/droplet.svg"
                  alt="droplet"
                  className="w-5 h-5"
                />{" "}
                הנוזל כמעט לא נדחס! אין מספיק מרווחים בין החלקיקים.
              </>
            ) : (
              "נסה להפעיל לחץ - הנוזל לא יידחס!"
            )}
          </p>
        )}
        {matterState === "solid" && (
          <p className="font-bold flex items-center justify-center gap-2">
            {pressure > 50 ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/ice.svg"
                  alt="ice"
                  className="w-5 h-5"
                />{" "}
                המוצק לא נדחס כלל! החלקיקים כבר צמודים לחלוטין.
              </>
            ) : (
              "נסה להפעיל לחץ - המוצק לא יידחס!"
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export const DiffusionSimulation: React.FC = () => {
  const [active, setActive] = useState(false);
  const [temperature, setTemperature] = useState(25);

  const speed = temperature / 25;

  return (
    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-purple-900">
        פעפוע (דיפוזיה) בתוך גז
      </h4>

      <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-inner mb-2">
        <label className="block text-slate-700 font-bold mb-2 text-center flex items-center justify-center gap-2">
          <img
            src="https://api.iconify.design/fluent-emoji/thermometer.svg"
            alt="thermometer"
            className="w-5 h-5"
          />{" "}
          טמפרטורה: {temperature}°C
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
        <p className="text-center text-sm text-slate-500 mt-1">
          {temperature < 25
            ? "קר - פעפוע איטי"
            : temperature > 50
            ? "חם - פעפוע מהיר!"
            : "רגיל"}
        </p>
      </div>

      <div className="relative w-[400px] h-[200px] bg-white border-2 border-purple-200 rounded-2xl overflow-hidden shadow-inner">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`a-${i}`}
            className="absolute w-3 h-3 bg-red-500 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: active
                ? `${Math.random() * 80 + 10}%`
                : `${Math.random() * 30 + 5}%`,
              transition: `all ${3 / speed}s ease-in-out`
            }}
          ></div>
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`b-${i}`}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: active
                ? `${Math.random() * 80 + 10}%`
                : `${Math.random() * 30 + 65}%`,
              transition: `all ${3 / speed}s ease-in-out`
            }}
          ></div>
        ))}
        {!active && (
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-300"></div>
        )}
      </div>

      <button
        onClick={() => setActive(!active)}
        className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-purple-700 transition-all"
      >
        {active ? "אפס ניסוי" : "הסר את המחיצה"}
      </button>

      <p className="text-purple-800 font-medium italic text-center">
        החלקיקים מתערבבים מעצמם בגלל תנועתם המתמדת.
        <br />
        <span className="text-sm">
          ככל שהטמפרטורה גבוהה יותר - הפעפוע מהיר יותר!
        </span>
      </p>
    </div>
  );
};

export const ParticleModelSimulation: React.FC = () => {
  const [state, setState] = useState<"solid" | "liquid" | "gas">("solid");
  const [particles, setParticles] = useState<
    { x: number; y: number; vx: number; vy: number }[]
  >([]);

  useEffect(() => {
    const count = state === "gas" ? 20 : state === "liquid" ? 30 : 36;
    const newParticles = [];

    if (state === "solid") {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          newParticles.push({
            x: 30 + col * 25,
            y: 30 + row * 25,
            vx: 0,
            vy: 0
          });
        }
      }
    } else {
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * 160 + 20,
          y:
            state === "gas"
              ? Math.random() * 160 + 20
              : Math.random() * 80 + 100,
          vx: (Math.random() - 0.5) * (state === "gas" ? 4 : 2),
          vy: (Math.random() - 0.5) * (state === "gas" ? 4 : 2)
        });
      }
    }
    setParticles(newParticles);
  }, [state]);

  useEffect(() => {
    if (state === "solid") return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          if (newX < 10 || newX > 190) newVx = -newVx;
          if (newY < 10 || newY > 190) newVy = -newVy;

          if (state === "liquid" && newY < 90) {
            newY = 90;
            newVy = Math.abs(newVy);
          }

          return {
            x: Math.max(10, Math.min(190, newX)),
            y: Math.max(10, Math.min(190, newY)),
            vx: newVx,
            vy: newVy
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-indigo-900">
        סידור החלקיקים במצבי צבירה שונים
      </h4>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => setState("solid")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "solid"
              ? "bg-slate-600 text-white"
              : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/ice.svg"
            alt="ice"
            className="w-5 h-5"
          />{" "}
          מוצק
        </button>
        <button
          onClick={() => setState("liquid")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "liquid"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          נוזל
        </button>
        <button
          onClick={() => setState("gas")}
          className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
            state === "gas"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border border-purple-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
            alt="gas"
            className="w-5 h-5"
          />{" "}
          גז
        </button>
      </div>

      <div className="relative w-[200px] h-[200px] bg-white border-4 border-slate-300 rounded-xl overflow-hidden shadow-inner">
        {state === "liquid" && (
          <div className="absolute bottom-0 w-full h-[55%] bg-blue-100 opacity-50"></div>
        )}
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full transition-all ${
              state === "solid"
                ? "bg-slate-500 animate-pulse"
                : state === "liquid"
                ? "bg-blue-500"
                : "bg-purple-500"
            }`}
            style={{
              left: p.x - 8,
              top: p.y - 8,
              transition:
                state === "solid"
                  ? "none"
                  : "left 0.05s linear, top 0.05s linear"
            }}
          ></div>
        ))}
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          state === "solid"
            ? "bg-slate-100 text-slate-800"
            : state === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {state === "solid" && (
          <p>
            <strong>מוצק:</strong> החלקיקים מסודרים בצורה קבועה, צמודים זה לזה,
            ורק רוטטים במקומם. כוחות המשיכה חזקים מאוד.
          </p>
        )}
        {state === "liquid" && (
          <p>
            <strong>נוזל:</strong> החלקיקים קרובים אך לא מסודרים, מחליקים זה על
            זה ומחליפים מקומות. כוחות המשיכה בינוניים.
          </p>
        )}
        {state === "gas" && (
          <p>
            <strong>גז:</strong> החלקיקים מרוחקים מאוד, נעים בחופשיות ובמהירות
            לכל הכיוונים. כוחות המשיכה חלשים מאוד.
          </p>
        )}
      </div>
    </div>
  );
};

export const SurfaceTensionSimulation: React.FC = () => {
  const [dropCount, setDropCount] = useState(0);
  const [hasSoap, setHasSoap] = useState(false);
  const maxDrops = hasSoap ? 8 : 25;

  const addDrop = () => {
    if (dropCount < maxDrops) {
      setDropCount((prev) => prev + 1);
    }
  };

  const reset = () => {
    setDropCount(0);
  };

  const toggleSoap = () => {
    setHasSoap(!hasSoap);
    setDropCount(0);
  };

  const domeHeight = Math.min(dropCount * (hasSoap ? 2 : 4), hasSoap ? 15 : 80);

  return (
    <div className="bg-cyan-50 p-8 rounded-3xl border border-cyan-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-cyan-900">
        ניסוי מתח פנים: טיפות על מטבע
      </h4>

      <div className="flex gap-4 mb-2">
        <button
          onClick={toggleSoap}
          className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            !hasSoap
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          מים רגילים
        </button>
        <button
          onClick={toggleSoap}
          className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 ${
            hasSoap
              ? "bg-pink-600 text-white"
              : "bg-white text-pink-600 border border-pink-200"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/soap.svg"
            alt="soap"
            className="w-5 h-5"
          />{" "}
          מים + סבון
        </button>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative w-32 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-amber-900 font-bold text-xs">מטבע</span>

          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 bg-blue-400 rounded-t-full transition-all duration-300"
            style={{
              width: `${60 + dropCount * 2}px`,
              height: `${domeHeight}px`,
              opacity: dropCount > 0 ? 0.8 : 0
            }}
          ></div>
        </div>

        <p className="mt-4 text-lg font-bold text-cyan-800">
          טיפות: {dropCount} / {maxDrops}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={addDrop}
          disabled={dropCount >= maxDrops}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            dropCount >= maxDrops
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg"
          }`}
        >
          <img
            src="https://api.iconify.design/fluent-emoji/droplet.svg"
            alt="droplet"
            className="w-5 h-5"
          />{" "}
          הוסף טיפה
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/counterclockwise-arrows-button.svg"
            alt="reset"
            className="w-5 h-5"
          />{" "}
          אפס
        </button>
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          hasSoap ? "bg-pink-100 text-pink-800" : "bg-cyan-100 text-cyan-800"
        }`}
      >
        {!hasSoap ? (
          dropCount >= maxDrops ? (
            <p>
              <strong>מדהים!</strong> מתח הפנים של המים יצר "כיפה" גבוהה על
              המטבע. הטיפות החזיקו הרבה זמן בלי להישפך!
            </p>
          ) : (
            <p>
              הוסיפו טיפות וראו כיצד מתח הפנים מחזיק את המים על המטבע בצורת
              כיפה.
            </p>
          )
        ) : dropCount >= maxDrops ? (
          <p>
            <strong>הסבון הוריד את מתח הפנים!</strong> המים נשפכו מהר יותר כי
            כוחות המשיכה בין החלקיקים נחלשו.
          </p>
        ) : (
          <p>
            שימו לב: עם סבון, המים יישפכו מהר יותר! הסבון מחליש את מתח הפנים.
          </p>
        )}
      </div>
    </div>
  );
};

export const PhaseTransitionSimulation: React.FC = () => {
  const [temperature, setTemperature] = useState(25);
  const [isAnimating, setIsAnimating] = useState(false);

  const getState = () => {
    if (temperature <= 0) return "solid";
    if (temperature >= 100) return "gas";
    return "liquid";
  };

  const state = getState();

  const animate = (direction: "heat" | "cool") => {
    setIsAnimating(true);
    const target = direction === "heat" ? 120 : -20;
    const step = direction === "heat" ? 2 : -2;

    const interval = setInterval(() => {
      setTemperature((prev) => {
        const next = prev + step;
        if (
          (direction === "heat" && next >= target) ||
          (direction === "cool" && next <= target)
        ) {
          clearInterval(interval);
          setIsAnimating(false);
          return target;
        }
        return next;
      });
    }, 50);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-orange-900">מעברי פאזה של מים</h4>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => animate("cool")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/snowflake.svg"
            alt="snowflake"
            className="w-5 h-5"
          />{" "}
          קרר
        </button>
        <button
          onClick={() => animate("heat")}
          disabled={isAnimating}
          className="px-6 py-3 rounded-xl font-bold bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          <img
            src="https://api.iconify.design/fluent-emoji/fire.svg"
            alt="fire"
            className="w-5 h-5"
          />{" "}
          חמם
        </button>
      </div>

      <div className="relative w-40 h-48 bg-slate-200 rounded-b-3xl border-4 border-slate-400 overflow-hidden shadow-inner">
        {state === "solid" && (
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-cyan-400 to-cyan-200 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-cyan-600 rounded-sm animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        )}
        {state === "liquid" && (
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-blue-500 to-blue-300">
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-700 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${30 + Math.random() * 60}%`,
                    animation: `float ${
                      1 + Math.random()
                    }s ease-in-out infinite`
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
        {state === "gas" && (
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animation: `bubble ${
                    1.5 + Math.random()
                  }s ease-in-out infinite`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-3xl font-black text-slate-800">{temperature}°C</p>
        <p className="text-lg font-bold mt-2 flex items-center justify-center gap-2">
          {state === "solid" && (
            <span className="text-cyan-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/ice.svg"
                alt="ice"
                className="w-6 h-6"
              />{" "}
              קרח (מוצק)
            </span>
          )}
          {state === "liquid" && (
            <span className="text-blue-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/droplet.svg"
                alt="droplet"
                className="w-6 h-6"
              />{" "}
              מים (נוזל)
            </span>
          )}
          {state === "gas" && (
            <span className="text-purple-600 flex items-center gap-1">
              <img
                src="https://api.iconify.design/fluent-emoji/dashing-away.svg"
                alt="gas"
                className="w-6 h-6"
              />{" "}
              אדים (גז)
            </span>
          )}
        </p>
      </div>

      <div className="w-full max-w-sm">
        <input
          type="range"
          min="-20"
          max="120"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          disabled={isAnimating}
          className="w-full accent-orange-600"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>-20°C</span>
          <span className="text-blue-500 font-bold">0°C (קפיאה)</span>
          <span className="text-red-500 font-bold">100°C (רתיחה)</span>
          <span>120°C</span>
        </div>
      </div>

      <div
        className={`p-4 rounded-xl text-center max-w-md ${
          state === "solid"
            ? "bg-cyan-100 text-cyan-800"
            : state === "liquid"
            ? "bg-blue-100 text-blue-800"
            : "bg-purple-100 text-purple-800"
        }`}
      >
        {state === "solid" && (
          <p>
            ב-0°C ומטה, המים הופכים לקרח. החלקיקים מסודרים ורק רוטטים במקומם.
          </p>
        )}
        {state === "liquid" && (
          <p>
            בין 0°C ל-100°C, המים נמצאים במצב נוזלי. החלקיקים מחליקים זה על זה.
          </p>
        )}
        {state === "gas" && (
          <p>
            ב-100°C ומעלה, המים הופכים לאדים. החלקיקים נעים בחופשיות בכל
            הכיוונים.
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes bubble {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export const DensityCalculator: React.FC = () => {
  const [mass, setMass] = useState(100);
  const [volume, setVolume] = useState(50);

  const density = volume > 0 ? (mass / volume).toFixed(2) : 0;
  const floats = Number(density) < 1;

  const getMaterialGuess = () => {
    const d = Number(density);
    if (d < 0.1) return { name: "קלקר", icon: "package" };
    if (d < 0.6) return { name: "עץ", icon: "wood" };
    if (d < 0.95) return { name: "שמן/פלסטיק", icon: "oil-drum" };
    if (d >= 0.95 && d <= 1.05) return { name: "מים", icon: "droplet" };
    if (d < 2.8) return { name: "אלומיניום/זכוכית", icon: "window" };
    if (d < 8) return { name: "ברזל/פלדה", icon: "gear" };
    if (d < 11) return { name: "כסף/נחושת", icon: "2nd-place-medal" };
    return { name: "זהב/עופרת", icon: "1st-place-medal" };
  };

  const material = getMaterialGuess();

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl border border-sky-100 flex flex-col items-center gap-6">
      <h4 className="font-black text-2xl text-sky-900">מחשבון צפיפות</h4>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <label className="block text-slate-700 font-bold mb-2">
            <img
              src="https://api.iconify.design/fluent-emoji/balance-scale.svg"
              alt="scale"
              className="w-6 h-6 inline mr-2"
            />
            מסה (גרם)
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <p className="text-center text-2xl font-black text-sky-700 mt-2">
            {mass} גרם
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <label className="block text-slate-700 font-bold mb-2">
            <img
              src="https://api.iconify.design/fluent-emoji/package.svg"
              alt="package"
              className="w-6 h-6 inline mr-2"
            />
            נפח (סמ"ק)
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <p className="text-center text-2xl font-black text-sky-700 mt-2">
            {volume} סמ"ק
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-md">
        <p className="text-slate-600 mb-2">צפיפות = מסה ÷ נפח</p>
        <p className="text-3xl font-black text-sky-800">
          {mass} ÷ {volume} = <span className="text-sky-600">{density}</span>{" "}
          גר'/סמ"ק
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
        <div
          className={`p-5 rounded-2xl text-center ${
            floats
              ? "bg-emerald-100 text-emerald-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="text-lg font-bold mb-2">
            {floats ? (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/up-arrow.svg"
                  alt="up"
                  className="w-8 h-8 inline"
                />
                יצוף במים!
              </>
            ) : (
              <>
                <img
                  src="https://api.iconify.design/fluent-emoji/down-arrow.svg"
                  alt="down"
                  className="w-8 h-8 inline"
                />
                ישקע במים!
              </>
            )}
          </p>
          <p className="text-sm opacity-80">(צפיפות המים = 1 גר'/סמ"ק)</p>
        </div>

        <div className="bg-purple-100 p-5 rounded-2xl text-center text-purple-800">
          <p className="text-lg font-bold mb-2">
            <img
              src={`https://api.iconify.design/fluent-emoji/${material.icon}.svg`}
              alt={material.icon}
              className="w-8 h-8 inline mr-1"
            />{" "}
            ניחוש חומר:
          </p>
          <p className="text-xl font-black">{material.name}</p>
        </div>
      </div>
    </div>
  );
};
