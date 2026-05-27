export function NotFound({ formId }: { formId?: string | null }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-lg border border-dashed border-gray-300 p-6 text-center">
      <p className="text-base font-semibold text-gray-900">Form not found</p>
      <p className="text-sm text-gray-600">
        {formId
          ? `No form is registered for the ID "${formId}".`
          : "No form ID was provided."}
      </p>
    </div>
  );
}
