import { Suspense } from 'react';
import './globals.css';
import {Inter} from "next/font/google";
import NavigationEvents from 'airbnb/components/common/NavigationEvents';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "AirBnb Clone",
}

export default function RootLayout({children}) {
  return (
  <html lang="en">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" precedence="default"></link>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type="text/css" precedence="default"></link>

    <body className={inter.className}>
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </body>
  </html>
  );
}