import { Suspense } from "react";
import ContactClient from "./page-client";

export const metadata = {
  title: "Start a Project — Contact | Metamorph.live",
  description: "Tell us what you need. We'll scope, design, and build your full digital stack.",
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-[#12130f] flex items-center justify-center text-white font-sans text-sm">
        Loading form...
      </div>
    }>
      <ContactClient />
    </Suspense>
  );
}
