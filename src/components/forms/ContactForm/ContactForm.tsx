export function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-first-name"
            className="text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="contact-first-name"
            name="first_name"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-(--brand-primary)"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-last-name"
            className="text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="contact-last-name"
            name="last_name"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-(--brand-primary)"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-gray-700"
        >
          Email*
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-(--brand-primary)"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-product"
          className="text-sm font-medium text-gray-700"
        >
          Which product are you interested in?*
        </label>
        <select
          id="contact-product"
          name="product"
          required
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-(--brand-primary)"
        >
          <option value="" disabled>
            Please Select
          </option>
          <option value="aaro">AARO</option>
          <option value="aico">Aico</option>
          <option value="mercur">Mercur</option>
          <option value="full-suite">Full Pacera Suite</option>
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <span>I agree to the Privacy Policy</span>
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center w-full rounded-full bg-(--brand-primary) text-white font-bold text-base px-6 py-3 hover:opacity-90 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
