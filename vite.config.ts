import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA as pwa } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pwa({
      mode: 'development',
      registerType: 'prompt',
      srcDir: 'src/lib/service-workers',
      filename: 'sw.ts',
      workbox: {
        swDest: process.env.PROD ? 'dist' : 'public',
      },
      strategies: 'injectManifest',
      manifestFilename: 'manifest.webmanifest',
      scope: process.env.NODE_ENV === 'development' ? '/' : '/fun-noti',
      manifest: {
        display_override: [
          'standalone',
          'fullscreen',
          'minimal-ui'
        ],
        "name": "Fun Noti",
        "short_name": "Fun Noti",
        "description": "Get your compliment for today :)\nAnd allow us to push notification to you!",
        "id": "fun-noti",
        "theme_color": "oklch(0.145 0 0)",
        "display": "standalone",
        "icons": [
          {
            "src": "assets/icons/windows11/SmallTile.scale-100.png",
            "sizes": "71x71"
          },
          {
            "src": "assets/icons/windows11/SmallTile.scale-125.png",
            "sizes": "89x89"
          },
          {
            "src": "assets/icons/windows11/SmallTile.scale-150.png",
            "sizes": "107x107"
          },
          {
            "src": "assets/icons/windows11/SmallTile.scale-200.png",
            "sizes": "142x142"
          },
          {
            "src": "assets/icons/windows11/SmallTile.scale-400.png",
            "sizes": "284x284"
          },
          {
            "src": "assets/icons/windows11/Square150x150Logo.scale-100.png",
            "sizes": "150x150"
          },
          {
            "src": "assets/icons/windows11/Square150x150Logo.scale-125.png",
            "sizes": "188x188"
          },
          {
            "src": "assets/icons/windows11/Square150x150Logo.scale-150.png",
            "sizes": "225x225"
          },
          {
            "src": "assets/icons/windows11/Square150x150Logo.scale-200.png",
            "sizes": "300x300"
          },
          {
            "src": "assets/icons/windows11/Square150x150Logo.scale-400.png",
            "sizes": "600x600"
          },
          {
            "src": "assets/icons/windows11/Wide310x150Logo.scale-100.png",
            "sizes": "310x150"
          },
          {
            "src": "assets/icons/windows11/Wide310x150Logo.scale-125.png",
            "sizes": "388x188"
          },
          {
            "src": "assets/icons/windows11/Wide310x150Logo.scale-150.png",
            "sizes": "465x225"
          },
          {
            "src": "assets/icons/windows11/Wide310x150Logo.scale-200.png",
            "sizes": "620x300"
          },
          {
            "src": "assets/icons/windows11/Wide310x150Logo.scale-400.png",
            "sizes": "1240x600"
          },
          {
            "src": "assets/icons/windows11/LargeTile.scale-100.png",
            "sizes": "310x310"
          },
          {
            "src": "assets/icons/windows11/LargeTile.scale-125.png",
            "sizes": "388x388"
          },
          {
            "src": "assets/icons/windows11/LargeTile.scale-150.png",
            "sizes": "465x465"
          },
          {
            "src": "assets/icons/windows11/LargeTile.scale-200.png",
            "sizes": "620x620"
          },
          {
            "src": "assets/icons/windows11/LargeTile.scale-400.png",
            "sizes": "1240x1240"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.scale-100.png",
            "sizes": "44x44"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.scale-125.png",
            "sizes": "55x55"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.scale-150.png",
            "sizes": "66x66"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.scale-200.png",
            "sizes": "88x88"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.scale-400.png",
            "sizes": "176x176"
          },
          {
            "src": "assets/icons/windows11/StoreLogo.scale-100.png",
            "sizes": "50x50"
          },
          {
            "src": "assets/icons/windows11/StoreLogo.scale-125.png",
            "sizes": "63x63"
          },
          {
            "src": "assets/icons/windows11/StoreLogo.scale-150.png",
            "sizes": "75x75"
          },
          {
            "src": "assets/icons/windows11/StoreLogo.scale-200.png",
            "sizes": "100x100"
          },
          {
            "src": "assets/icons/windows11/StoreLogo.scale-400.png",
            "sizes": "200x200"
          },
          {
            "src": "assets/icons/windows11/SplashScreen.scale-100.png",
            "sizes": "620x300"
          },
          {
            "src": "assets/icons/windows11/SplashScreen.scale-125.png",
            "sizes": "775x375"
          },
          {
            "src": "assets/icons/windows11/SplashScreen.scale-150.png",
            "sizes": "930x450"
          },
          {
            "src": "assets/icons/windows11/SplashScreen.scale-200.png",
            "sizes": "1240x600"
          },
          {
            "src": "assets/icons/windows11/SplashScreen.scale-400.png",
            "sizes": "2480x1200"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            "sizes": "16x16"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            "sizes": "20x20"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            "sizes": "24x24"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            "sizes": "30x30"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            "sizes": "32x32"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            "sizes": "36x36"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            "sizes": "40x40"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            "sizes": "44x44"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            "sizes": "48x48"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            "sizes": "60x60"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            "sizes": "64x64"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            "sizes": "72x72"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            "sizes": "80x80"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            "sizes": "96x96"
          },
          {
            "src": "assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            "sizes": "256x256"
          },
          {
            "purpose": "maskable",
            "sizes": "1024x1024",
            "src": "assets/icons/android/maskable_icon.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "48x48",
            "src": "assets/icons/android/maskable_icon_x48.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "72x72",
            "src": "assets/icons/android/maskable_icon_x72.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "96x96",
            "src": "assets/icons/android/maskable_icon_x96.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "128x128",
            "src": "assets/icons/android/maskable_icon_x128.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "192x192",
            "src": "assets/icons/android/maskable_icon_x192.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "384x384",
            "src": "assets/icons/android/maskable_icon_x384.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "assets/icons/android/maskable_icon_x512.png",
            "type": "image/png"
          },
          {
            "src": "assets/icons/ios/16.png",
            "sizes": "16x16"
          },
          {
            "src": "assets/icons/ios/20.png",
            "sizes": "20x20"
          },
          {
            "src": "assets/icons/ios/29.png",
            "sizes": "29x29"
          },
          {
            "src": "assets/icons/ios/32.png",
            "sizes": "32x32"
          },
          {
            "src": "assets/icons/ios/40.png",
            "sizes": "40x40"
          },
          {
            "src": "assets/icons/ios/50.png",
            "sizes": "50x50"
          },
          {
            "src": "assets/icons/ios/57.png",
            "sizes": "57x57"
          },
          {
            "src": "assets/icons/ios/58.png",
            "sizes": "58x58"
          },
          {
            "src": "assets/icons/ios/60.png",
            "sizes": "60x60"
          },
          {
            "src": "assets/icons/ios/64.png",
            "sizes": "64x64"
          },
          {
            "src": "assets/icons/ios/72.png",
            "sizes": "72x72"
          },
          {
            "src": "assets/icons/ios/76.png",
            "sizes": "76x76"
          },
          {
            "src": "assets/icons/ios/80.png",
            "sizes": "80x80"
          },
          {
            "src": "assets/icons/ios/87.png",
            "sizes": "87x87"
          },
          {
            "src": "assets/icons/ios/100.png",
            "sizes": "100x100"
          },
          {
            "src": "assets/icons/ios/114.png",
            "sizes": "114x114"
          },
          {
            "src": "assets/icons/ios/120.png",
            "sizes": "120x120"
          },
          {
            "src": "assets/icons/ios/128.png",
            "sizes": "128x128"
          },
          {
            "src": "assets/icons/ios/144.png",
            "sizes": "144x144"
          },
          {
            "src": "assets/icons/ios/152.png",
            "sizes": "152x152"
          },
          {
            "src": "assets/icons/ios/167.png",
            "sizes": "167x167"
          },
          {
            "src": "assets/icons/ios/180.png",
            "sizes": "180x180"
          },
          {
            "src": "assets/icons/ios/192.png",
            "sizes": "192x192"
          },
          {
            "src": "assets/icons/ios/256.png",
            "sizes": "256x256"
          },
          {
            "src": "assets/icons/ios/512.png",
            "sizes": "512x512"
          },
          {
            "src": "assets/icons/ios/1024.png",
            "sizes": "1024x1024"
          }
        ],
        start_url: process.env.NODE_ENV === 'development' ? '/' : '/fun-noti',
        screenshots: [
          {
            form_factor: 'narrow',
            src: 'assets/screenshots/screenshot-1.png',
            sizes: '432x933',
            label: 'Fun Noti'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
      },
      output: {
        entryFileNames: e => {
          //if (e.name.includes('sw')) return 'sw.js'
          if (e.name.endsWith('css')) return 'assets/index-[hash].css'
          return 'assets/index-[hash].js'
        }
      }
    }
  },
  envPrefix: "FUN",
  keepProcessEnv: true,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://my-fun-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
