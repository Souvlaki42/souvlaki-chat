import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Messages = async () => {
  const messages = await db.query.messages.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <ul className="flex flex-col items-center justify-center gap-4">
      {messages.map((message) => (
        <li key={message.id} className="flex gap-4">
          <div className="flex-1">{message.content}</div>
        </li>
      ))}
    </ul>
  );
};

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <h1 className="h-full w-full text-center text-2xl">
          Please Sign in to chat
        </h1>
      </SignedOut>
      <SignedIn>
        <Messages />
      </SignedIn>
    </main>
  );
}
