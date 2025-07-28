import { g as generateOgImageForSite } from './index_TTkl_jss.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: { "Content-Type": "image/png" }
});

export { GET };
