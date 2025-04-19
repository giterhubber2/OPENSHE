import type { Metadata, ResolvingMetadata } from 'next'

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

 
type Props = {
  params: { id: string }
}


// export const metadata: Metadata = {
//     title: 'OpenSea | Support',
//     description: `OpenSea is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using OpenSea today`,
//     icons: {
//         icon: "https://opensea.io/static/images/favicon/32x32.png", apple: "https://opensea.io/static/images/favicon/32x32.png" 
//     },
// };

 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const {id} = params


  // ANG PARAMS ID MAG INDICATE UNSA NA DATA TREE

//   const data = await fetch('https://cuddly-space-robot-rj7759vq963p46x-3000.app.github.dev/data.json').then((res) => res.json())

// console.log(data)
 
  // fetch data
  const product = await fetch(`https://manaboss-default-rtdb.firebaseio.com/tx/${id}.json`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []




 
  return {
    title: `${product.title}`,
    description: `${product.description}`,
    icons: {
        icon: "https://opensea.io/static/images/favicon/32x32.png", apple: "https://opensea.io/static/images/favicon/32x32.png" 
    },
    openGraph: {
      title: `${product.title}`,
      description: `${product.description}`,
      url: `https://www.seacontract.online/assets/${params.id}`,
      siteName: `${product.title}`,
      images: [
        {
          url: `${product.image}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: `${product.image}`, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'OpenSea',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}
 


// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return (
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     );
//   }
  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
