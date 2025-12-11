"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h2 className="page-title">Profile</h2>

      {!session && (
        <button
          onClick={() => signIn("spotify")}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            background: "#1db954",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login with Spotify
        </button>
      )}

      {session && (
        <>
          <p>Logged in as: {session.user.name}</p>
          <img src={session.user.image} width="80" style={{ borderRadius: "50%" }} />
          <br />
          <button
            onClick={() => signOut()}
            style={{
              marginTop: 20,
              padding: "10px 16px",
              borderRadius: 8,
              background: "#f44336",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
