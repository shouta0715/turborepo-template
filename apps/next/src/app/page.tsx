const colors = [
  "gray",
  "blue",
  "red",
  "amber",
  "green",
  "teal",
  "purple",
  "pink",
];

export default function Home() {
  return (
    <div className="text-2xl font-bold">
      <p>Hello World</p>
      <p className="bg-amber-100 text-amber-900">こんにちは</p>
      <ul className="mt-10 flex flex-col gap-4">
        {colors.map((color) => (
          <li key={color} className="flex items-center gap-4">
            <p
              className="w-20 text-xl"
              style={{
                color: `var(--color-${color}-900)`,
              }}
            >
              {color}
            </p>

            <ul className="flex gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <li
                  key={i}
                  className="h-10 w-16 rounded-md"
                  style={{
                    backgroundColor: `var(--color-${color}-${(i + 1) * 100})`,
                    boxShadow: `inset 0 0 0 1px var(--color-${color}-400)`,
                  }}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
