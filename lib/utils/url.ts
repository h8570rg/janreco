import { config } from "~/lib/config";

export const getURL = () => {
  let url =
    config.public.siteUrl ?? // Set this to your site URL in production env.
    config.public.vercelUrl ?? // Automatically set by Vercel.
    "http://localhost:3001/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
