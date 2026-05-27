export function LanguageDropdown() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-(--brand-text) font-medium"
    >
      <span aria-hidden="true">🇬🇧</span>
      <span>EN</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
