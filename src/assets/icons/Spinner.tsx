import type { SVGProps } from "./types";

const Spinner = (props: SVGProps) => (
  <div className="animate-[spin_1s_linear_infinite]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M3.33398 20.0002C3.33398 29.2052 10.7957 36.6668 20.0007 36.6668C29.2057 36.6668 36.6673 29.2052 36.6673 20.0002C36.6673 10.7952 29.2057 3.3335 20.0007 3.3335"
        stroke="#F8FAFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default Spinner;
