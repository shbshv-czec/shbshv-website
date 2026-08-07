// Сайт публикуется на GitHub Pages по адресу https://shbshv-czec.github.io/shbshv-website/
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shbshv-czec.github.io',
  base: '/shbshv-website',
  trailingSlash: 'ignore',
  build: {
    // одна страница — один html, ссылки вида kursy.html сохраняются
    format: 'file',
    // мелкие стили и скрипты — инлайном, меньше запросов на мобильном
    inlineStylesheets: 'auto',
  },
});
