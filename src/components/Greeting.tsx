import { useState } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

interface GreetingProps {
  messages: string[];
}

export default function Greeting({ messages }: GreetingProps): JSX.Element {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="text-white flex flex-col gap-y-2 py-4">
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        class="text-slate-400 bg-teal-100 w-fit m-auto rounded-xl px-4"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
