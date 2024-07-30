
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from "./BackToTop"
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Header1 from "./Header1"
import Header2 from './Header2'
import Header3 from "./Header3"
import Header4 from "./Header4"
import Header5 from "./Header5"
import MobileMenu from "./MobileMenu"
import SearchBox from "./SearchBox"
import Sidebar from "./Sidebar"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(false)
	// MoblileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)
	// Sidebar
	const [isSidebar, setSidebar] = useState(false)
	const handleSidebar = () => {
		setSidebar(!isSidebar)
		!isSidebar ? document.body.classList.add("open-sidebar") : document.body.classList.remove("open-sidebar")
	}
	// Search
	const [isSearch, setSearch] = useState(false)
	const handleSearch = () => {
		setSearch(!isSearch)
		!isSearch ? document.body.classList.add("open-search-box") : document.body.classList.remove("open-search-box")
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
            setScroll(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<>
		<div id="top" />
			<SearchBox
				isSearch={isSearch}
				handleSearch={handleSearch}
			/>
			{!headerStyle ? <Header1
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}
			{headerStyle == 1 ? <Header1
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			{headerStyle == 2 ? <Header2
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			{headerStyle == 3 ? <Header3
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			{headerStyle == 4 ? <Header4
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			{headerStyle == 5 ? <Header5
				scroll={scroll}
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				isSearch={isSearch}
				handleSearch={handleSearch}
			/> : null}

			<Sidebar
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
			/>

			<MobileMenu
				isMobileMenu={isMobileMenu}
				handleMobileMenu={handleMobileMenu}
			/>

			{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

			{children}

			{/* <NewsLetter1 /> */}

			{!footerStyle && < Footer1 />}
			{footerStyle == 1 ? < Footer1 /> : null}
			{footerStyle == 2 ? < Footer2 /> : null}

			<BackToTop target="#top" />
			<AddClassBody />
		</>
	)
}
