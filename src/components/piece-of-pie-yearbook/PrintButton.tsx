export function PrintButton() {
  return (
    <button
      className="yb-print-button"
      type="button"
      onClick={() => window.print()}
    >
      Print yearbook
    </button>
  );
}
