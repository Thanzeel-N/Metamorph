import ClientsClient from "./page-client";

export const metadata = {
  title: "Our Clients | Metamorph.live",
  description: "Trusted by startups and enterprises globally. See what our clients say about working with Metamorph.live.",
  alternates: {
    canonical: "https://metamorph.live/clients",
  },
};

export default function Page() {
  return <ClientsClient />;
}
