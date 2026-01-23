import Link from 'next/link';
import { Zap, BookOpen, Code2, Cpu, Network, Shield, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center bg-gradient-to-b from-fd-background to-fd-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-12 h-12 text-green-500" strokeWidth={2.5} />
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              ZAP Protocol
            </h1>
          </div>

          <p className="text-xl text-fd-muted-foreground md:text-2xl mb-4">
            Zero-latency Asynchronous Protocol
          </p>

          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto mb-8">
            High-performance RPC framework with Cap'n Proto serialization,
            multiple transport layers, and Byzantine fault-tolerant consensus.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-black bg-green-500 rounded-lg hover:bg-green-400 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/docs/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              Architecture
            </Link>
            <a
              href="https://github.com/zap-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-fd-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-green-500" />}
              title="Zero-Copy Serialization"
              description="Cap'n Proto provides zero-copy data access with no parsing overhead. Messages are usable directly from the wire."
            />
            <FeatureCard
              icon={<Network className="w-8 h-8 text-green-500" />}
              title="Multiple Transports"
              description="TCP, UDP, Unix sockets, and WebSocket transports. Choose the right transport for your latency and reliability needs."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-green-500" />}
              title="Async-First Design"
              description="Built for async/await from the ground up. Non-blocking I/O with efficient event loops and connection pooling."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-500" />}
              title="Byzantine Consensus"
              description="Optional BFT consensus layer for distributed agreement. Tolerates up to f Byzantine failures with 3f+1 nodes."
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-green-500" />}
              title="Code Generation"
              description="Generate type-safe client and server stubs from Cap'n Proto schemas. Full support for Go, Rust, and TypeScript."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-green-500" />}
              title="Gateway Layer"
              description="HTTP/REST gateway for browser clients. Automatic JSON transcoding with full streaming support."
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple & Expressive</h2>
          <p className="text-center text-fd-muted-foreground mb-8">
            Define your service once, generate clients for any language.
          </p>

          <div className="bg-fd-card border border-fd-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-fd-accent border-b border-fd-border">
              <span className="text-sm text-fd-muted-foreground">service.capnp</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code>{`@0xabcd1234abcd1234;

interface Calculator {
  add @0 (a :Float64, b :Float64) -> (result :Float64);
  multiply @1 (a :Float64, b :Float64) -> (result :Float64);

  # Streaming operations
  sumStream @2 (values :List(Float64)) -> (total :Float64);
}

interface Gateway {
  # HTTP gateway annotations
  calculator @0 () -> (calc :Calculator);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-fd-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-fd-muted-foreground mb-8">
            Get started with ZAP Protocol in minutes. Our comprehensive documentation
            covers everything from basic setup to advanced distributed systems patterns.
          </p>
          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-black bg-green-500 rounded-lg hover:bg-green-400 transition-colors"
          >
            Quick Start Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-fd-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" />
            <span className="font-medium">ZAP Protocol</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-fd-muted-foreground">
            <a href="https://github.com/zap-protocol" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
              GitHub
            </a>
            <Link href="/docs" className="hover:text-fd-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/docs/api" className="hover:text-fd-foreground transition-colors">
              API Reference
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-fd-background border border-fd-border rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-fd-muted-foreground">{description}</p>
    </div>
  );
}
