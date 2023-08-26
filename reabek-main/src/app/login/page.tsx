"use client";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const supabase = createClientComponentClient();

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{
      theme: ThemeSupa,
      variables: {
        default: {
          colors: {
            brand: "green",
            brandAccent: "darkgreen",
          },
        },
      },
    }}
  />
);
export default function Login() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex w-[325px] h-[540px] bg-[#202020] justify-center rounded-xl">
        <App />
      </div>
    </div>
  );
}