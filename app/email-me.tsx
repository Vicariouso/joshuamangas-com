"use client";

type EmailMeProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Assembles the mail link on click from split parts — no address string in HTML source.
 */
export function EmailMe({
  className = "",
  children = "Email me",
}: EmailMeProps) {
  function handleClick() {
    const local = ["josh", "ua"].join("");
    const host = ["governanceassurance", "co", "uk"].join(".");
    const scheme = ["mai", "lto"].join("");
    window.location.href = `${scheme}:${local}@${host}`;
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
