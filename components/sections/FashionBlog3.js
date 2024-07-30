
import Link from 'next/link'

export default function FashionBlog3() {
    return (
        <>
            <section className="fashion-blog-area fashion-2 padding">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Top Read Must</span></h3>
                        </div>
                        <div className="right-btn white">
                            <Link href="/blog-layout-1" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="row justify-content-center fashion-blog-top">
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-1.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-blue-light">Lifestyle</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Timeless and Chic Outfits for Your an Endless Wardrobe</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-2.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-blue">TECH</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Accessorizing for Impact with Top Trends of the Fall
                                            Season</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-3.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Your Body Type Flatter Your Figure with man Style</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-4.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-yellow">Food</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Your Body Type Flatter Your Figure with man Style</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-5.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-green">Sports</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Your Body Type Flatter Your Figure with man Style</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="post-card">
                                <div className="post-thumb">
                                    <Link href="/single-post-1"><img src="/assets/img/post/read-post-6.jpg" alt="post" /></Link>
                                </div>
                                <div className="post-content">
                                    <Link href="/single-post-1" className="card-btn bg-pink">Lifestyle</Link>
                                    <h3 className="title">
                                        <Link href="/single-post-1">Your Body Type Flatter Your Figure with man Style</Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">David Bin</Link></span>
                                        </li>
                                        <li className="date">July 29, 2024</li>
                                        <li><i className="las la-comments" />5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
