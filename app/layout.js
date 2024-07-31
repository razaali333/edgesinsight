import "@/node_modules/react-modal-video/css/modal-video.css"
import { Inter, Jost } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"
import AdSense from "../components/AdSense";
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/common-style.css"
import "/public/assets/css/dark-mode.css"
import "/public/assets/css/line-awesome.min.css"
import "/public/assets/css/main.css"
import "/public/assets/css/posty-color.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/venobox.min.css"


const inter = Inter({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--body-font",
	display: 'swap',
})

const jost = Jost({
	weight: ['200', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--secondary-font",
	display: 'swap',
})


export const metadata = {
	title: 'Posty | Blog and Megazine Next.Js Template',
	description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<AdSense pId={process.env.GOOGLE_ADSENSE} />
				<Script
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
				/>
				<Script id="ga-script" strategy="lazyOnload">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
				<Analytics />
			</head>
			<body className={`${inter.variable} ${jost.variable}`}>
				{children}
			</body>
		</html>
	)
}