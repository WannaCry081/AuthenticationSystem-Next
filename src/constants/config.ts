export function cookieConfig(maxAge: number) {
  const ENVIRONMENT = process.env.NEXT_PUBLIC_ENV;
  const HOST = process.env.NEXT_PUBLIC_HOSt;

  const config = {
    maxAge: maxAge * 60,
    path: "/",
    domain: HOST,
    httpOnly: !(ENVIRONMENT === "production"),
    secure: ENVIRONMENT === "production",
  };

  return config;
}
