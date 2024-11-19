import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.updatedAt),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-4xl font-bold">Souvlaki Chat</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Posts</h2>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id} className="flex gap-4">
              <div className="flex-1">{post.name}</div>
              <button className="rounded bg-blue-500 p-2">Edit</button>
              <button className="rounded bg-red-500 p-2">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
