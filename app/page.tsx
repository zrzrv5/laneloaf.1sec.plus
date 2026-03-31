const APP_STORE_URL = "https://apps.apple.com/us/app/laneloaf/id6761159321";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-mark">
          <img src="/icon.png" className="brand-icon" alt="LaneLoaf Icon" />
          <div className="brand-text">
            <div className="brand-name">LaneLoaf</div>
            <div className="brand-tagline">Dashcam trip library</div>
          </div>
        </div>
        <div className="header-actions">
          <a className="app-store-badge-sm" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            <img src="/assets/app-store-badge.svg" alt="Download on the App Store" />
          </a>
          <a className="link-secondary" href="/privacy.html">
            Privacy
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-heading-kicker">Local-First Archive</div>
          <h1 className="hero-heading">
            Your dashcam's best friend.
          </h1>
          <p className="hero-body">
            Turn raw footage into a beautifully organized trip library. Replay drives, view telemetry, and export logs natively on Mac and iPhone.
          </p>
          <a className="app-store-badge-lg" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            <img src="/assets/app-store-badge.svg" alt="Download on the App Store" />
          </a>
        </div>
        <div className="hero-visual">
          <img src="/assets/store/macOS_main.png" alt="Mac App" className="hero-mac" />
          <img src="/assets/store/iPhone_1.png" alt="iPhone App" className="hero-iphone" />
        </div>
      </section>

      <section className="section" aria-labelledby="features-heading">
        <div className="section-heading">Key Features</div>
        <h2 id="features-heading" className="section-title">
          Built for privacy and performance.
        </h2>
        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-title">Map-First Workbench</div>
            <p className="feature-body">
              Replay your entire route seamlessly with synchronized video and map progress.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-title">100% Local Processing</div>
            <p className="feature-body">
              No servers involved. Your videos and location data stay on your device and are processed locally.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-title">Private Cloud Sync</div>
            <p className="feature-body">
              Mirror your trips across devices seamlessly using your personal iCloud database.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-title">Powerful Exports</div>
            <p className="feature-body">
              Quickly save GPX logs, route snapshot images, or generate progress videos for sharing.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-heading">
        <div className="section-heading">App Gallery</div>
        <h2 id="gallery-heading" className="section-title">
          Available natively on Mac and iPhone.
        </h2>
        <div className="gallery-masonry">
          <div className="gallery-col">
            <img src="/assets/store/macOS_feat1.png" alt="Mac UI Screenshot 1" />
            <img src="/assets/store/iPhone_2.png" alt="iPhone App Map View" />
          </div>
          <div className="gallery-col">
            <img src="/assets/store/iPhone_3.png" alt="iPhone App Trip View" />
            <img src="/assets/store/macOS_feat2.png" alt="Mac UI Screenshot 2" />
          </div>
          <div className="gallery-col">
            <img src="/assets/store/macOS_feat3.png" alt="Mac UI Screenshot 3" />
            <img src="/assets/store/iPhone_4.png" alt="iPhone App Settings" />
          </div>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="section-heading">FAQ</div>
        <h2 id="faq-heading" className="section-title">
          Frequently asked questions.
        </h2>
        
        <div className="faq-grid">
          <div className="faq-item">
            <h3 className="faq-question">How does it work?</h3>
            <p className="faq-answer">
              Simply plug in your SD card and import your dashcam data. LaneLoaf automatically syncs the telemetry and video, allowing you to intuitively scrub through your route map.
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Is my data private?</h3>
            <p className="faq-answer">
              Yes. All processing is performed entirely on-device, and your raw files are never uploaded. LaneLoaf only reads the files you explicitly provide and does not even require Location Permissions to function. If you choose to enable cloud sync, your trip telemetry is securely synchronized using your private iCloud account.
            </p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Which dashcam models are supported?</h3>
            <p className="faq-answer">
              We currently test and verify our software primarily with VIOFO dashcams. If you successfully use LaneLoaf with another brand, or if you would like to request support for a specific model, please <a href="mailto:feedback@1sec.plus?subject=LaneLoaf%20Dashcam%20Support&body=Hi%20team%2C%0A%0AI%20would%20like%20to%20verify%20or%20request%20support%20for%20my%20dashcam%20model%3A%0A%0ABrand%3A%0AModel%3A%0A%0A" className="link-secondary" style={{textDecoration: 'underline'}}>email us</a>!
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} LaneLoaf. All rights reserved.</div>
        <div className="footer-links">
          <a href="/privacy.html">Privacy</a>
          <a href="mailto:feedback@1sec.plus?subject=LaneLoaf%20Feedback&body=Hi%20team%2C">Contact Support</a>
        </div>
      </footer>
    </main>
  );
}
