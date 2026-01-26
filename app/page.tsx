import Link from 'next/link';
import { BookOpen, Code2, Cpu, Network, Shield, ArrowRight, Zap, Timer, Database, Globe, Server, Gauge, Layers, GitBranch, Terminal, Box, Workflow, Lock, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center bg-gradient-to-b from-fd-background to-fd-card">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-6xl rotate-[-15deg] inline-block">⚡</span>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              ZAP
            </h1>
          </div>

          <p className="text-2xl text-blue-400 font-semibold md:text-3xl mb-6">
            Infinitely faster.
          </p>

          <p className="text-xl text-fd-muted-foreground max-w-3xl mx-auto mb-4">
            Zero-copy Application Protocol for the age of AI & crypto.
          </p>

          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto mb-8">
            Think JSON, except binary. Think Protocol Buffers, except faster.
            In benchmarks, ZAP is <span className="text-blue-400 font-bold">∞ times</span> faster.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/docs/why-zap"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              Why ZAP?
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

      {/* The Story Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
            <Gauge className="w-4 h-4" />
            The Benchmark That Changed Everything
          </div>
          <h2 className="text-3xl font-bold mb-6">Why ∞ times faster?</h2>
          <div className="space-y-4 text-fd-muted-foreground">
            <p>
              This benchmark is, of course, unfair. It only measures the time to encode and decode a message in memory.
            </p>
            <p>
              ZAP gets a perfect score because <span className="text-blue-400 font-semibold">there is no encoding/decoding step</span>.
            </p>
            <p>
              The ZAP encoding works both as a <span className="text-white font-medium">data interchange format</span> AND
              an <span className="text-white font-medium">in-memory representation</span>.
              Once your structure is built, you can simply write the bytes straight out to disk.
            </p>
            <p className="text-white font-medium pt-4">
              No parsing. No serialization. Just data.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Learn ZAP</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            From zero to production in four steps
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <LearningCard
              step={1}
              icon={<BookOpen className="w-6 h-6" />}
              title="Understand"
              description="Learn why ZAP is infinitely faster and how zero-copy works"
              href="/docs"
            />
            <LearningCard
              step={2}
              icon={<Code2 className="w-6 h-6" />}
              title="Schema"
              description="Define your data structures with the ZAP schema language"
              href="/docs/schema"
            />
            <LearningCard
              step={3}
              icon={<Terminal className="w-6 h-6" />}
              title="Generate"
              description="Generate type-safe code for Go, Rust, TypeScript, or Python"
              href="/docs/codegen"
            />
            <LearningCard
              step={4}
              icon={<Rocket className="w-6 h-6" />}
              title="Deploy"
              description="Build production services with the ZAP RPC system"
              href="/docs/rpc"
            />
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="px-6 py-20 bg-fd-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Platform-independent binary format designed for modern CPUs
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-blue-500" />}
              title="Zero-Copy Access"
              description="Data arranged like compiler structs — fixed widths, fixed offsets, proper alignment. No parsing overhead, no memory copies."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-500" />}
              title="Platform Independent"
              description="Encoding is byte-for-byte identical across platforms. Pointers are offset-based for position independence. Little-endian for CPU efficiency."
            />
            <FeatureCard
              icon={<GitBranch className="w-8 h-8 text-blue-500" />}
              title="Backwards Compatible"
              description="New fields always added to end of struct. Recipients do bounds checking. Field numbering maintains compatibility automatically."
            />
            <FeatureCard
              icon={<Box className="w-8 h-8 text-blue-500" />}
              title="Smart Packing"
              description="Fixed-width integers and padding are zeros. ZAP's packing compression removes them, achieving better sizes than protobuf — and still faster."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Security First"
              description="Generated accessors validate all pointers before following. Out-of-bounds pointers throw or return defaults. Battle-tested in Cloudflare Workers."
            />
            <FeatureCard
              icon={<Timer className="w-8 h-8 text-blue-500" />}
              title="Time-Travel RPC"
              description="ZAP's RPC system implements promise pipelining — call results return to clients before requests even arrive at the server."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>

          <div className="space-y-8">
            <FAQItem
              question="Doesn't fixed-width data waste space on the wire?"
              answer="Yes, but since all the extra bytes are zeros, ZAP's packing scheme removes them. It achieves similar (better, even) message sizes to protobuf encoding, and it's still faster. For bandwidth-critical paths, apply general compression (zlib, LZ4) on top."
            />
            <FAQItem
              question="Isn't directly accessing binary data insecure?"
              answer="ZAP does NOT just cast a buffer pointer to a struct pointer. It generates accessor methods that validate pointers before following them. Invalid pointers throw exceptions or return defaults. ZAP was built for Sandstorm.io and is heavily used in Cloudflare Workers — environments where security is paramount."
            />
            <FAQItem
              question="How does backwards compatibility work?"
              answer="New fields are always added to the end of a struct (or replace padding). Existing field positions never change. Recipients do bounds checking when reading. Fields are numbered by addition order, so ZAP always knows how to arrange them."
            />
            <FAQItem
              question="What languages are supported?"
              answer="ZAP has mature implementations for C++, Rust, Go, TypeScript/JavaScript, Python, Java, and C#. The schema language and wire format are language-agnostic."
            />
          </div>
        </div>
      </section>

      {/* Superpowers Section */}
      <section className="px-6 py-20 bg-fd-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Superpowers</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Capabilities that other formats simply can't match
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SuperpowerCard
              title="Incremental Reads"
              description="Process messages before receiving all data"
            />
            <SuperpowerCard
              title="Random Access"
              description="Read one field without parsing everything"
            />
            <SuperpowerCard
              title="Memory Mapping"
              description="mmap large files, OS loads only what you touch"
            />
            <SuperpowerCard
              title="Inter-Language"
              description="Same in-memory structure across all languages"
            />
            <SuperpowerCard
              title="Shared Memory IPC"
              description="Process-to-process as fast as thread-to-thread"
            />
            <SuperpowerCard
              title="Arena Allocation"
              description="Faster allocation, better cache locality"
            />
            <SuperpowerCard
              title="Tiny Codegen"
              description="10x smaller than protobuf generated code"
            />
            <SuperpowerCard
              title="Tiny Runtime"
              description="Minimal library footprint"
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple & Expressive</h2>
          <p className="text-center text-fd-muted-foreground mb-8">
            Define your schema once, generate clients for any language.
          </p>

          <div className="bg-fd-card border border-fd-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-fd-accent border-b border-fd-border">
              <span className="text-sm text-fd-muted-foreground">addressbook.zap</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code>{`@0xabcd1234abcd1234;

struct Person {
  name @0 :Text;
  birthdate @3 :Date;  # Fields numbered by addition order
  email @1 :Text;      # for backwards compatibility
  phones @2 :List(PhoneNumber);
}

struct PhoneNumber {
  number @0 :Text;
  type @1 :PhoneType;
}

enum PhoneType {
  mobile @0;
  home @1;
  work @2;
}

interface AddressBook {
  lookup @0 (id :UInt64) -> (person :Person);
  search @1 (query :Text) -> stream (person :Person);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16 bg-fd-card border-y border-fd-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Battle-Tested Security</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto mb-6">
            ZAP was built for Sandstorm.io and is now heavily used in <span className="text-blue-400 font-semibold">Cloudflare Workers</span> —
            environments where security is paramount. Undergone fuzzing and expert security review.
          </p>
          <p className="text-sm text-fd-muted-foreground italic">
            "The most awesome response I've ever had." — Ben Laurie, security researcher
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to go infinitely faster?</h2>
          <p className="text-fd-muted-foreground mb-8">
            Get started with ZAP in minutes. Comprehensive docs cover everything
            from basic setup to advanced distributed systems patterns.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Quick Start Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://twitter.com/AltZap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              Follow @AltZap
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-fd-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl rotate-[-15deg] inline-block">⚡</span>
            <span className="font-medium">ZAP Protocol</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-fd-muted-foreground">
            <a href="https://github.com/zap-protocol" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
              GitHub
            </a>
            <Link href="/docs" className="hover:text-fd-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/schema" className="hover:text-fd-foreground transition-colors">
              Schema
            </Link>
            <Link href="/docs/rpc" className="hover:text-fd-foreground transition-colors">
              RPC
            </Link>
            <Link href="/docs/api" className="hover:text-fd-foreground transition-colors">
              API
            </Link>
            <a href="https://twitter.com/AltZap" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
              Twitter
            </a>
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

function LearningCard({
  step,
  icon,
  title,
  description,
  href,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block p-6 bg-fd-card border border-fd-border rounded-lg hover:border-blue-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-blue-400 bg-blue-500/10 rounded-full">
          {step}
        </span>
        <span className="text-blue-500">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </Link>
  );
}

function SuperpowerCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 bg-fd-background border border-fd-border rounded-lg">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full" />
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-fd-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="border-b border-fd-border pb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-fd-muted-foreground">{answer}</p>
    </div>
  );
}
