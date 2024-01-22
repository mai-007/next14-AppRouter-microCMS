import '@/styles/globals.scss';
import Layout from '@/components/layout';
import { siteMeta } from '@/lib/constants';
const { siteLang } = siteMeta;
// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
  <html lang={siteLang}>
    <body>
    <Layout>{children}</Layout>
    </body>
  </html>
  );
}