import Link from "next/link";

const github = "https://github.com/Intrik8-Labs";
const linkedIn = "https://www.linkedin.com/in/jasonrscherer/";

function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Intrik8 Labs home">
      <span className="brand-mark" aria-hidden="true"><span>8</span></span>
      <span>Intrik8 <b>Labs</b></span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Wordmark />
          <nav aria-label="Main navigation">
            <a href="#products">Products</a>
            <a href="#studio">Studio</a>
            <a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗︎</span></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="accent-line" /> Independent software studio</p>
            <h1 id="hero-title">Practical software<br className="hero-break" /> for <em>small teams.</em></h1>
            <p className="hero-description">
              Intrik8 Labs is building tools for small businesses and independent operators to keep track of their equipment, work, and documents.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">Explore the products <span aria-hidden="true">↓︎</span></a>
              <a className="text-link" href={github}>Follow on GitHub <span aria-hidden="true">↗︎</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </section>

        <section className="products" id="products" aria-labelledby="products-title">
          <div className="shell section-inner">
            <div className="section-header">
              <p className="eyebrow"><span className="accent-line" /> Products</p>
              <h2 id="products-title">What we’re building</h2>
            </div>
            <div className="product-grid">
              <article className="product-card">
                <div className="product-heading">
                  <p className="eyebrow">Asset management</p>
                  <p className="status"><span /> In planning</p>
                </div>
                <h3>Yggdrasil</h3>
                <p>A modular operations platform starting with computer inventory. The first version is planned to help you track what you own, where it is, what changed, and what needs follow-up.</p>
                <ul className="product-scope" aria-label="Initial Yggdrasil scope">
                  <li>Inventory</li>
                  <li>Locations</li>
                  <li>Follow-up work</li>
                </ul>
                <a className="text-link product-link" href={`${github}/yggdrasil/tree/dev`}>See the Yggdrasil plans <span aria-hidden="true">↗︎</span></a>
              </article>
              <article className="product-card skald-card">
                <div className="product-heading">
                  <p className="eyebrow">Document workflows</p>
                  <p className="status"><span /> In design</p>
                </div>
                <h3>Skald</h3>
                <p>A standalone tool for creating documents from templates, moving them through review, and keeping a history of revisions and approvals.</p>
                <ol className="product-scope" aria-label="Planned Skald workflow">
                  <li>Draft</li>
                  <li>Review</li>
                  <li>Final</li>
                </ol>
                <a className="text-link product-link" href="#contact">Ask about Skald <span aria-hidden="true">↘︎</span></a>
              </article>
            </div>
          </div>
        </section>

        <section className="shell studio section-inner" id="studio" aria-labelledby="studio-title">
          <div className="section-header">
            <p className="eyebrow"><span className="accent-line" /> The studio</p>
            <h2 id="studio-title">Built around<br /> everyday work.</h2>
          </div>
          <div className="studio-copy">
            <p>I’m Jason Scherer, a software engineer and the founder of Intrik8 Labs in Las Vegas. I started the studio to build the kinds of tools I wanted to use myself, starting with keeping track of my own computers and homelab.</p>
            <p>That same approach drives Skald. Start with a workflow people already have, then make it easier to run and maintain.</p>
          </div>
        </section>

        <section className="shell contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><span className="accent-line" /> Contact</p>
            <h2 id="contact-title">Let’s talk.</h2>
            <p>Have a question about Yggdrasil or Skald? Tell me how you handle that work today.</p>
          </div>
          <a className="button button-primary" href={linkedIn}>Connect with Jason on LinkedIn <span aria-hidden="true">↗︎</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <Wordmark />
          <span>Las Vegas, Nevada</span>
          <a className="text-link" href={github}>GitHub <span aria-hidden="true">↗︎</span></a>
        </div>
      </footer>
    </>
  );
}
