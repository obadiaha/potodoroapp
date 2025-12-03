import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Background Effects */}
      <div className="fixed inset-0 hero-glow pointer-events-none" />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
              <span className="text-2xl">🌱</span>
            </div>
            <span className="text-xl font-bold text-white">Potodoro</span>
          </div>
          <a 
            href="#download" 
            className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
            style={{ backgroundColor: 'rgba(84, 106, 54, 0.2)', color: 'var(--color-primary-light)' }}
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className={`max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary-light)' }} />
            <span className="text-sm text-white/70">Now available on iOS</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Grow Your </span>
            <span style={{ 
              background: 'linear-gradient(to right, var(--color-primary-light), var(--color-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Focus</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your focus sessions into a virtual garden. Plant strains, build streaks, and watch your productivity bloom.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#download" className="btn-primary inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <a href="#features" className="btn-secondary inline-flex items-center justify-center gap-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          
          {/* App Preview */}
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-[3rem] blur-3xl" style={{ background: 'linear-gradient(to bottom, rgba(84, 106, 54, 0.2), transparent)' }} />
            <div className="relative glass rounded-[3rem] p-3 animate-float">
              <div className="rounded-[2.5rem] aspect-[9/19] flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(84, 106, 54, 0.2)' }}>
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🌿</div>
                  <div className="text-6xl font-light text-white mb-2">25:00</div>
                  <div className="px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: 'var(--color-navy)' }}>
                    Grow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Everything you need to <span style={{ color: 'var(--color-primary-light)' }}>stay focused</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Potodoro combines the proven Pomodoro technique with gamification to make productivity addictive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon="🌱"
              title="Grow Virtual Plants"
              description="Watch your focus transform into beautiful plants. Complete sessions to grow and harvest your virtual garden."
            />
            <FeatureCard 
              icon="⏱️"
              title="Flexible Timer"
              description="Choose between timer mode with customizable durations or stopwatch mode for open-ended focus sessions."
            />
            <FeatureCard 
              icon="🏆"
              title="Earn Rewards"
              description="Gain coins and XP for completed sessions. Level up to unlock new strains and customization options."
            />
            <FeatureCard 
              icon="🔥"
              title="Build Streaks"
              description="Maintain daily focus streaks to maximize your rewards and build lasting productivity habits."
            />
            <FeatureCard 
              icon="🏷️"
              title="Organize with Tags"
              description="Create custom tags to categorize sessions by project, client, or goal. Track time across different areas."
            />
            <FeatureCard 
              icon="📊"
              title="Deep Insights"
              description="Visualize your focus patterns with beautiful charts. Understand when and how you work best."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Simple as <span style={{ color: 'var(--color-accent)' }}>1, 2, 3</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard 
              number="01"
              title="Set Your Timer"
              description="Choose your focus duration or use stopwatch mode. Select a strain to grow."
            />
            <StepCard 
              number="02"
              title="Stay Focused"
              description="Watch your plant grow as you work. The longer you focus, the more it flourishes."
            />
            <StepCard 
              number="03"
              title="Harvest Rewards"
              description="Complete your session to harvest coins, XP, and add to your growing collection."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(84, 106, 54, 0.2), transparent)' }} />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to grow your focus?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                Join thousands of users who have transformed their productivity with Potodoro.
              </p>
              <a href="https://apps.apple.com/app/potodoro" className="btn-primary inline-flex items-center gap-3 text-lg">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <span className="text-lg">🌱</span>
              </div>
              <span className="font-semibold text-white">Potodoro</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-white/50">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:potodoro.app@gmail.com" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <p className="text-sm text-white/30">
              © 2025 Potodoro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold mb-4" style={{ color: 'rgba(84, 106, 54, 0.3)' }}>{number}</div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
