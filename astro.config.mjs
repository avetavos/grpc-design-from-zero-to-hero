// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://software-design.avetavos.com',
  base: '/grpc',
  output: 'static',
  integrations: [starlight({
      title: 'gRPC Design — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/grpc/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/grpc/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/grpc/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/grpc/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#00ACC1' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "gRPC Design" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/grpc/sw.js',{scope:'/grpc/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/grpc-design-from-zero-to-hero' }],
      sidebar: [
        { label: 'gRPC Foundations', items: [{ autogenerate: { directory: 'grpc-foundations' } }] },
        { label: 'Protocol Buffers', items: [{ autogenerate: { directory: 'protocol-buffers' } }] },
        { label: 'Service Definition', items: [{ autogenerate: { directory: 'service-definition' } }] },
        { label: 'Building Services', items: [{ autogenerate: { directory: 'building-services' } }] },
        { label: 'Streaming', items: [{ autogenerate: { directory: 'streaming' } }] },
        { label: 'Production Concerns', items: [{ autogenerate: { directory: 'production' } }] },
        { label: 'Ecosystem & Advanced', items: [{ autogenerate: { directory: 'ecosystem-advanced' } }] },
      ],
      }), preact()],
});
