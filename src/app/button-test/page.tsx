"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ButtonTestPage() {
  return (
    <div className="min-h-screen bg-[#0B0D14] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Button Component Test Page</h1>

        <div className="space-y-12">
          {/* Variants Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Button Variants</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Default Variant (Red Gradient)</h3>
                <Button>Default Button</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Outline Variant</h3>
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>
          </section>

          {/* Sizes Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Button Sizes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Default Size</h3>
                <Button>Default Size</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Small Size</h3>
                <Button size="sm">Small Button</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Extra Small Size</h3>
                <Button size="xs">XS Button</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Icon Size</h3>
                <Button size="icon">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </section>

          {/* States Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Button States</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Normal State</h3>
                <Button>Normal Button</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Disabled State</h3>
                <Button disabled>Disabled Button</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Loading State</h3>
                <Button isLoading>Loading Button</Button>
              </div>
            </div>
          </section>

          {/* With Icons Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Buttons with Icons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">With Icon (Left)</h3>
                <Button>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Star Button
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">With Icon (Right)</h3>
                <Button>
                  Download
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Icon Only</h3>
                <Button size="icon">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </section>

          {/* As Link Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Buttons as Links (asChild prop)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Button as Link</h3>
                <Button asChild>
                  <Link href="/early-access">Go to Early Access</Link>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Outline Button as Link</h3>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Current Gradient Comparison */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Comparison with Original Gradient Button</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">New Default Button</h3>
                <Button>Get Started</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Original GradientButton Style (for reference)</h3>
                <div className="inline-flex items-center rounded-full bg-red-600 hover:bg-red-700 text-white font-medium border-0 transition-all duration-300 px-4 py-2 text-sm md:text-base">
                  Get Started
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
