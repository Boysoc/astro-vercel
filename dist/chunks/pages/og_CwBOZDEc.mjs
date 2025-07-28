import { g as generateOgImageForSite } from './index_D_Kx4bYV.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: { "Content-Type": "image/png" }
});

export { GET };
