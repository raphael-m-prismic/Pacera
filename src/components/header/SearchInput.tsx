export function SearchInput() {
  return (
    <div className="flex items-center gap-2 bg-[#EFEFEF] rounded-lg px-4 py-3 w-full">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-500"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none flex-1 text-sm text-[#26262c] placeholder:text-[#26262c]"
      />
    </div>
  );
}
