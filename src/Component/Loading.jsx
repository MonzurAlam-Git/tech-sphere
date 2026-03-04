export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="animate-spin"
        style={{ animationDuration: "700ms" }}
      >
        <polygon points="12,2 17,10 7,10" fill="white" opacity="1" />
        <polygon points="20,14 22,22 12,18" fill="white" opacity="0.45" />
        <polygon points="4,14 12,18 2,22" fill="white" opacity="0.2" />
      </svg>
    </div>
  );
}
