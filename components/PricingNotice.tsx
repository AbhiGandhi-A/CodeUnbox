export function PricingNotice() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "16px",
        textAlign: "center",
        fontSize: "14px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <strong>Anonymous users:</strong> Max 100 files per ZIP, no individual file downloads.
      <a href="/login" style={{ marginLeft: "8px", textDecoration: "underline" }}>
        Sign in to unlock more features
      </a>
    </div>
  )
}
