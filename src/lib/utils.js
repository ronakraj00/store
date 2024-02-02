import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const pattern = {
  backgroundColor: "#ffffff",
  opacity: 0.8,
  backgroundImage: "radial-gradient(#444cf7 0.5px, #ffffff 0.5px)",
  backgroundSize: "20px 20px",
  backgroundPosition: "10px 10px",
  backgroundAttachment: "fixed",
};

export {pattern};