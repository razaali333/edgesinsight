'use client'
import Link from 'next/link'

export default function Menu({ transparent, scroll }) {
	return (
		<>
			<ul className="main-menu">
				<li className="active">
					<Link href="/">Home</Link>
					
				</li>
				
				<li>
					<Link href="/#">Categories</Link>
					<ul>
						<li><Link href="/blog-default">Blog Default</Link></li>
						<li><Link href="/blog-layout-1">Blog Layout 1</Link></li>
						<li><Link href="/blog-layout-2">Blog Layout 2</Link></li>
						<li><Link href="/blog-layout-3">Blog Layout 3</Link></li>
						<li><Link href="/blog-layout-4">Blog Layout 4</Link></li>
					</ul>
				</li>
			
				<li><Link href="/contact">Contact</Link></li>
			</ul>
		</>
	)
}
