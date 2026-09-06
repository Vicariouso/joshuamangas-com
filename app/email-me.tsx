"use client";

type EmailMeProps = {
  className?: string;
  children?: React.ReactNode;
};

export function EmailMe({ className = "", children = "Email me" }: EmailMeProps) {
  function handleClick() {
    const user = ["joshua"].join("");
    const domain = ["governanceassurance", ".", "co", ".", "uk"].join("");
    window.location.href = ["mail", "to", ":", user, "@", domain].join("");
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
