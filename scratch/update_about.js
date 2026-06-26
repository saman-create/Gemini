const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startIdx = html.indexOf('<!-- ABOUT SECTION -->');
const endIdx = html.indexOf('<!-- CTA SECTION -->');

if (startIdx === -1 || endIdx === -1) {
    console.log("Could not find boundaries.");
    process.exit(1);
}

const newAboutSection = `<!-- ABOUT SECTION -->
      <section id="about" style="background-color: #ffffff; padding: 112px 0;">
        <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 24px;">
          <div style="display: flex; flex-wrap: wrap; gap: 64px; align-items: center;">
            
            <!-- Left Column -->
            <div class="scroll-reveal" style="flex: 1 1 400px;">
              <h2 class="section-title">About OAKSORS</h2>
              <p
                style="
                  font-size: 18px;
                  line-height: 1.6;
                  color: #64748b;
                  margin-bottom: 48px;
                "
              >
                Everything you need to confidently manage your precious metals portfolio — designed with simplicity, speed, and honesty in mind.
              </p>

              <div style="display: flex; flex-direction: column; gap: 32px;">
                <!-- Active Item -->
                <div style="padding-left: 24px; border-left: 3px solid #2563eb; position: relative;">
                  <h3 style="font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Wholesale Precious Metals</h3>
                  <p style="font-size: 15px; color: #64748b; line-height: 1.5; margin: 0;">
                    OAKSORS is a wholesale precious metals company providing dedicated services for your retirement needs.
                  </p>
                </div>

                <!-- Inactive Item -->
                <div style="padding-left: 24px; border-left: 3px solid #e2e8f0; position: relative; opacity: 0.7;">
                  <h3 style="font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Nationwide & International</h3>
                  <p style="font-size: 15px; color: #64748b; line-height: 1.5; margin: 0;">
                    We provide service internationally and to all 50 states and territories within the United States of America.
                  </p>
                </div>

                <!-- Inactive Item -->
                <div style="padding-left: 24px; border-left: 3px solid #e2e8f0; position: relative; opacity: 0.7;">
                  <h3 style="font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Connect With Us</h3>
                  <p style="font-size: 15px; color: #64748b; line-height: 1.5; margin: 0; margin-bottom: 12px;">
                    Inquire about our services today!
                  </p>
                  <div style="display: flex; gap: 16px; color: #64748b;">
                    <a href="#" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='inherit'">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a href="#" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='inherit'">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="#" style="color: inherit; transition: color 0.3s;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='inherit'">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="scroll-reveal" style="flex: 1 1 400px; transition-delay: 100ms;">
              <div style="background-color: #f8fafc; border-radius: 24px; padding: 24px; padding-bottom: 0; padding-right: 0; overflow: hidden; display: flex; align-items: flex-end; justify-content: flex-end; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <img
                  src="assets/images/senior-couple.png"
                  alt="Senior couple holding gold and silver coins"
                  style="
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    border-top-left-radius: 16px;
                    box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                    border-bottom: none;
                    border-right: none;
                    display: block;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      `;

html = html.substring(0, startIdx) + newAboutSection + html.substring(endIdx);

fs.writeFileSync('index.html', html);
console.log("About section updated.");
