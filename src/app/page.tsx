import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/lib/themes/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <nav className="flex justify-end">
        <ThemeToggle />
      </nav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Hello World</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
