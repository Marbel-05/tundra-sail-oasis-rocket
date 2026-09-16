import { createFileRoute } from "@tanstack/react-router";
import { CartillaApp } from "@/components/cartilla-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <CartillaApp />;
}
