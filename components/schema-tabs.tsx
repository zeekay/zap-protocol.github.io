'use client';

import { useState } from 'react';

interface SchemaTabsProps {
  zap: string;
  capnp: string;
  filename?: string;
}

export function SchemaTabs({ zap, capnp, filename }: SchemaTabsProps) {
  const [activeTab, setActiveTab] = useState<'zap' | 'capnp'>('zap');

  // Syntax highlighting for ZAP (whitespace-significant)
  const highlightZap = (code: string) => {
    return code
      .split('\n')
      .map((line) => {
        // Comments
        if (line.trim().startsWith('#')) {
          return `<span class="text-emerald-400">${escapeHtml(line)}</span>`;
        }
        // Keywords and syntax
        let highlighted = escapeHtml(line);
        highlighted = highlighted
          .replace(/\b(struct|interface|enum|union|stream|using|import)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')
          .replace(/\b(Text|Bool|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float32|Float64|Data|Void|Date)\b/g, '<span class="text-cyan-400">$1</span>')
          .replace(/\bList\(/g, '<span class="text-cyan-400">List</span>(')
          .replace(/-&gt;/g, '<span class="text-yellow-400">-&gt;</span>');
        return highlighted;
      })
      .join('\n');
  };

  // Syntax highlighting for Cap'n Proto (traditional)
  const highlightCapnp = (code: string) => {
    return code
      .split('\n')
      .map((line) => {
        // File ID annotation
        if (line.trim().startsWith('@0x')) {
          const escaped = escapeHtml(line);
          return escaped.replace(/(@0x[a-f0-9]+;)(\s*#.*)?/i, '<span class="text-orange-400">$1</span><span class="text-emerald-400">$2</span>');
        }
        // Comments
        if (line.trim().startsWith('#')) {
          return `<span class="text-emerald-400">${escapeHtml(line)}</span>`;
        }
        // Keywords and syntax
        let highlighted = escapeHtml(line);
        highlighted = highlighted
          .replace(/\b(struct|interface|enum|union|stream|using|import)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')
          .replace(/:(\s*)(Text|Bool|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float32|Float64|Data|Void|Date)\b/g, ':<span class="text-cyan-400">$2</span>')
          .replace(/:(\s*)List\(/g, ':<span class="text-cyan-400">List</span>(')
          .replace(/@(\d+)/g, '<span class="text-yellow-400">@$1</span>')
          .replace(/-&gt;/g, '<span class="text-yellow-400">-&gt;</span>')
          .replace(/(#[^<]*)$/g, '<span class="text-emerald-400">$1</span>');
        return highlighted;
      })
      .join('\n');
  };

  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const code = activeTab === 'zap' ? zap : capnp;
  const highlighted = activeTab === 'zap' ? highlightZap(code) : highlightCapnp(code);

  return (
    <div className="my-4 rounded-lg border border-fd-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-fd-accent border-b border-fd-border">
        {filename ? (
          <span className="text-sm text-fd-muted-foreground font-mono">{filename}</span>
        ) : (
          <span />
        )}
        <div className="flex gap-1 bg-fd-background rounded-md p-1">
          <button
            onClick={() => setActiveTab('zap')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'zap'
                ? 'bg-blue-600 text-white'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
          >
            .zap
          </button>
          <button
            onClick={() => setActiveTab('capnp')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'capnp'
                ? 'bg-fd-muted text-fd-foreground'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
          >
            .capnp
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm bg-fd-background">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}

export default SchemaTabs;
