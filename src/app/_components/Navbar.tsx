import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white">
          Souvlaki Chat
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
