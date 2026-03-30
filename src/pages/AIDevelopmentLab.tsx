import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cpu, Database, BookOpen, Brain, Mail, Layers, FolderOpen, Search, FlaskConical, Workflow, Shield, RefreshCw, Send, GitBranch, Lightbulb, GraduationCap, Microscope, Target, Users, ArrowRight, Notebook, Globe, TestTube, FileText, Gauge, Box, Cog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const AIDevelopmentLab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Development Lab</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Hands-On Framework Evaluations That Drove Enterprise AI Architecture Selection and Team Upskilling
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI Development Lab
              </h1>
              <p className="text-lg text-purple-600 font-medium mb-6">
                Built three production agents and evaluated four agentic AI frameworks hands-on — generating the practitioner depth that directly informed the enterprise's selection of Strands SDK for production deployment and shaped the team's AI upskilling roadmap.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span>Infrastructure: Ollama, vLLM, Qdrant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span>Agents: 3 Production Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4" />
                  <span>Frameworks: Strands, LangGraph, CrewAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Learning: 16 Notebooks</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Built a fully local AI development platform orchestrating Ollama, vLLM, and Qdrant with three production agents and comprehensive framework evaluation infrastructure. This practitioner-depth work — building, evaluating, and benchmarking agentic AI systems across multiple frameworks — directly informed enterprise architecture decisions including the selection of Strands Agents SDK for production pipeline agents.
                </p>
                <p>
                  The AI Lab demonstrates that <strong>leadership credibility in AI transformation comes from building, not just directing</strong>. By operating at the practitioner level — writing agent code, benchmarking inference engines, and comparing framework trade-offs — the lab produced insights that shaped how an entire organization approaches AI-augmented workflows.
                </p>
              </div>
            </section>

            {/* Platform Architecture */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Architecture</h2>
              <p className="mb-6">
                The AI Lab runs entirely on local infrastructure, providing full control over model selection, data privacy, and cost. The architecture separates compute, storage, and orchestration into distinct layers:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Ollama (Port 11434)</h4>
                  </div>
                  <p className="text-sm mb-2">Primary model runtime serving 9+ models for different task types. Acts as the default inference backend for most agent workloads, providing broad model compatibility and straightforward local deployment.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Supports models from 3B to 14B+ parameters</li>
                    <li>• Hot-swap models without restarting services</li>
                    <li>• OpenAI-compatible API for seamless framework integration</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">vLLM (Port 8000)</h4>
                  </div>
                  <p className="text-sm mb-2">High-performance inference engine for throughput-demanding workloads. Used when batch processing or concurrent requests exceed what Ollama handles efficiently.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Continuous batching for higher throughput</li>
                    <li>• PagedAttention for efficient memory management</li>
                    <li>• Benchmarked against Ollama for latency and tokens-per-second</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Qdrant (Port 6333)</h4>
                  </div>
                  <p className="text-sm mb-2">Vector database for semantic search and RAG applications. Stores embedded research papers and email content for similarity-based retrieval across all agents.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Collections for research papers, email clusters, and experiments</li>
                    <li>• Payload filtering for metadata-driven search refinement</li>
                    <li>• REST and gRPC APIs for flexible integration</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Task-Based Model Routing</h4>
                  </div>
                  <p className="text-sm mb-2">Shared model router maps tasks to appropriately-sized models. All agent code uses the router instead of hardcoding models, enabling centralized model management and easy upgrades.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• <strong>Fast tasks</strong> → phi3:mini (low latency, simple extraction)</li>
                    <li>• <strong>Research</strong> → qwen3:14b (nuanced summarization)</li>
                    <li>• <strong>Reasoning</strong> → deepseek-r1:14b (chain-of-thought tasks)</li>
                    <li>• <strong>Embedding</strong> → nomic-embed-text (vector generation)</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-gray-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="w-6 h-6 text-gray-600" />
                    <h4 className="font-bold text-lg">Split Storage Architecture</h4>
                  </div>
                  <p className="text-sm">Code lives on SSD for fast development iteration. Data — models, vector stores, outputs, and logs — lives on a separate drive optimized for capacity. This separation keeps the development environment responsive while accommodating large model files and growing vector collections.</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Three Production Agents */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Production Agents</h2>
              <p className="mb-6">
                Each agent was built on a different framework to evaluate real-world trade-offs between graph-based pipelines, model-driven agent loops, and multi-agent orchestration:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-indigo-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-indigo-600" />
                    <h4 className="font-bold text-lg">Research Agent (LangGraph)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Daily digest of AI papers from six academic sources: ArXiv, Semantic Scholar, OpenAlex, DBLP, RSS feeds, and HuggingFace. Produces a curated summary of the most relevant new research each day.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-indigo-800 mb-2">Pipeline Flow:</p>
                    <p className="text-sm text-indigo-700">Fetches → Filters by relevance → Embeds in Qdrant → Summarizes → Delivers as markdown/JSON/email</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Graph-Based Pipeline:</strong> Each stage is a LangGraph node with explicit edges, making the flow debuggable and modifiable</li>
                    <li><strong>Relevance Filtering:</strong> LLM scores papers against configurable research interests before embedding</li>
                    <li><strong>Multi-Channel Delivery:</strong> Same content output as markdown files, structured JSON, and formatted email</li>
                    <li><strong>Incremental Processing:</strong> Tracks previously seen papers to avoid duplicate processing on subsequent runs</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary" className="mr-1">LangGraph</Badge>
                    <Badge variant="secondary" className="mr-1">RAG</Badge>
                    <Badge variant="secondary" className="mr-1">Multi-Source</Badge>
                    <Badge variant="secondary">Qdrant</Badge>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-emerald-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-lg">Email Agent (LangGraph)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Gmail inbox organizer processing 5,000+ emails. Clusters emails by sender domain, uses LLM to name groups and flag spam, then applies Gmail labels — all without ever deleting a message.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-emerald-800 mb-2">Key Design Pattern:</p>
                    <p className="text-sm text-emerald-700">Code handles volume (Python clustering), LLMs handle judgment (naming, classification). This pattern maximizes cost efficiency and reliability.</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Hybrid Processing:</strong> Python handles the heavy lifting of clustering 5,000+ emails by domain; the LLM only judges cluster names and spam likelihood</li>
                    <li><strong>Safety-First:</strong> Never deletes — only labels. Dry-run mode available for previewing changes before applying</li>
                    <li><strong>Checkpoint Support:</strong> Incremental runs via checkpoints so only new emails are processed on each execution</li>
                    <li><strong>Gmail API Integration:</strong> Reads inbox, creates labels, and applies labels through the Gmail API</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary" className="mr-1">LangGraph</Badge>
                    <Badge variant="secondary" className="mr-1">Gmail API</Badge>
                    <Badge variant="secondary" className="mr-1">Clustering</Badge>
                    <Badge variant="secondary">Safety-First</Badge>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-amber-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-amber-600" />
                    <h4 className="font-bold text-lg">Knowledge Agent (Strands Agents SDK)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Interactive RAG Q&A over stored research papers. The model autonomously decides when to search Qdrant, get paper details, or answer directly from context — demonstrating the model-driven tool loop pattern.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-amber-800 mb-2">Architecture Contrast:</p>
                    <p className="text-sm text-amber-700">Unlike the graph-based LangGraph agents where the developer defines the flow, the Strands agent lets the model decide which tools to call and when — a fundamentally different pattern for agent design.</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Model-Driven Tool Loop:</strong> The agent receives a question and autonomously decides its strategy — search vectors, retrieve full papers, or answer directly</li>
                    <li><strong>Qdrant Integration:</strong> Semantic search over embedded research papers with metadata filtering</li>
                    <li><strong>Conversational Context:</strong> Maintains conversation history for follow-up questions and deeper exploration</li>
                    <li><strong>Framework Validation:</strong> This agent validated Strands SDK for production use, directly informing the enterprise adoption decision</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary" className="mr-1">Strands SDK</Badge>
                    <Badge variant="secondary" className="mr-1">RAG</Badge>
                    <Badge variant="secondary" className="mr-1">Tool Loop</Badge>
                    <Badge variant="secondary">Qdrant</Badge>
                  </div>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Framework Evaluations */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Framework Evaluations</h2>
              <p className="mb-6">
                The lab contains eight experiment notebooks comparing frameworks head-to-head. These are not toy examples — each evaluation uses real workloads and measures practical trade-offs that matter in production:
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "These evaluations directly drove the enterprise decision to adopt Strands Agents SDK for production pipeline agents."
                </blockquote>
                <cite className="text-sm text-gray-600">— On translating lab findings to enterprise architecture</cite>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">LangGraph vs CrewAI vs Strands</h4>
                  </div>
                  <p className="text-sm mb-2">Compared on agent loop flexibility, tool integration, error handling, and developer experience.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• LangGraph: Best for structured, multi-step pipelines</li>
                    <li>• Strands: Best for model-driven tool loops</li>
                    <li>• CrewAI: Best for multi-agent role orchestration</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Microscope className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Embedding Model Comparison</h4>
                  </div>
                  <p className="text-sm mb-2">Benchmarked across relevance, speed, and memory footprint.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Compared nomic-embed-text, mxbai-embed-large, and others</li>
                    <li>• Measured retrieval quality on real research corpus</li>
                    <li>• Evaluated memory vs. quality trade-offs for local deployment</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Classification Strategies</h4>
                  </div>
                  <p className="text-sm mb-2">Evaluated different approaches to content categorization.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Zero-shot vs. few-shot classification accuracy</li>
                    <li>• Prompt engineering effects on categorization quality</li>
                    <li>• Model size vs. classification performance</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TestTube className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Temperature Effects</h4>
                  </div>
                  <p className="text-sm mb-2">Tested output quality vs. creativity across model parameters.</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Measured determinism at low temperatures</li>
                    <li>• Evaluated creativity vs. accuracy trade-offs</li>
                    <li>• Identified optimal settings per task type</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Learning Infrastructure */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Infrastructure</h2>
              <p className="mb-6">
                Beyond the production agents, the lab includes a comprehensive learning and experimentation environment designed to build deep, hands-on understanding of AI engineering:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Notebook className="w-6 h-6 text-indigo-600" />
                    <h4 className="font-bold text-lg">8 Guided Notebooks</h4>
                  </div>
                  <p className="text-sm mb-3">Step-by-step notebooks that walk through core concepts with working code:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Model routing patterns and shared utility design</li>
                    <li>• RAG fundamentals — embedding, indexing, retrieval, and generation</li>
                    <li>• LangGraph patterns — nodes, edges, state management, and conditional routing</li>
                    <li>• CrewAI multi-agent orchestration — roles, tasks, and crew assembly</li>
                    <li>• Strands Agents SDK — tool definitions, agent loops, and model-driven execution</li>
                    <li>• Shared utilities — clients, configuration, and reusable components</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">8 Experiment Notebooks</h4>
                  </div>
                  <p className="text-sm mb-3">Head-to-head framework comparisons and parameter optimization with real workloads:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Framework comparison experiments across LangGraph, CrewAI, Strands, and OpenAI Agents SDK</li>
                    <li>• Embedding model benchmarks with relevance scoring</li>
                    <li>• Classification strategy evaluations</li>
                    <li>• Temperature and parameter optimization studies</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Web Dashboard</h4>
                  </div>
                  <p className="text-sm mb-3">FastAPI backend + SPA frontend providing a unified interface to the lab:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Research digest viewer with filtering and search</li>
                    <li>• Email grouping visualizer showing cluster structure</li>
                    <li>• Knowledge Q&A interface for interactive RAG queries</li>
                    <li>• Model playground for ad-hoc testing across all available models</li>
                    <li>• Direct chat interface for conversational model interaction</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Documentation & Testing</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Comprehensive Documentation:</strong> Services, frameworks, agents, architecture, daily workflow, model routing, endpoints, and integrations</li>
                    <li><strong>Full Test Suite:</strong> Unit tests for all shared utilities and clients, integration tests for each agent's full pipeline</li>
                    <li><strong>Runbooks:</strong> Step-by-step guides for common operations — starting services, running agents, troubleshooting failures</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Design Philosophy */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Philosophy</h2>
              <p className="mb-6">
                The lab is built around five principles that emerged from building and operating real agents — not theoretical preferences:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">1. Framework Specialization</h4>
                  </div>
                  <p className="text-sm">Right tool for each job: <strong>graph pipelines</strong> (LangGraph) for structured multi-step workflows, <strong>model-driven agent loops</strong> (Strands) for autonomous tool use, and <strong>multi-agent orchestration</strong> (CrewAI) for role-based collaboration. No single framework is best at everything — the lab proves this through direct comparison.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">2. Code Handles Volume, LLMs Handle Judgment</h4>
                  </div>
                  <p className="text-sm">Email clustering is pure Python; naming clusters uses the LLM. Research paper fetching is deterministic code; relevance scoring uses the LLM. This pattern <strong>maximizes cost efficiency and reliability</strong> — LLMs are expensive and nondeterministic, so they should only be used where judgment is genuinely needed.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">3. Safety-First Design</h4>
                  </div>
                  <p className="text-sm">The email agent only labels, never deletes. Dry-run modes are available everywhere. No auto-merge in any agent workflow. <strong>Agents that operate on real data need guardrails</strong> — especially when running locally where there is no approval workflow to catch mistakes.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">4. Incremental Processing</h4>
                  </div>
                  <p className="text-sm">Checkpoint-based execution so agents process only new data on each run. The research agent tracks previously seen papers; the email agent tracks processed message IDs. This makes daily operation efficient and prevents duplicate work.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Send className="w-6 h-6 text-indigo-600" />
                    <h4 className="font-bold text-lg">5. Multi-Channel Delivery</h4>
                  </div>
                  <p className="text-sm">Same content delivered as markdown, JSON, and email for different consumption patterns. A research digest can be read as a formatted markdown file, ingested programmatically as JSON, or skimmed as a morning email. One pipeline, multiple outputs.</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Agentic AI Resource Guide */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agentic AI Resource Guide</h2>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "Adopted as the team's onboarding standard and used to upskill engineers transitioning from manual pipeline work to agent-augmented workflows."
                </blockquote>
                <cite className="text-sm text-gray-600">— On the Resource Guide's organizational impact</cite>
              </div>

              <p className="mb-4">
                Authored a curated 85+ resource guide covering the full landscape of agentic AI — from foundational research to production deployment patterns:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-bold text-lg">Architecture & Design</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Architecture patterns and system design for AI agents</li>
                    <li>• Production operations and deployment patterns</li>
                    <li>• Evaluation methodology and benchmarking</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Foundational Research</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• ReAct: Reasoning and Acting in Language Models</li>
                    <li>• Chain of Thought and Tree of Thoughts prompting</li>
                    <li>• CoALA: Cognitive Architectures for Language Agents</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Framework Deep Dives</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Strands Agents SDK architecture and patterns</li>
                    <li>• LangChain/LangGraph ecosystem and best practices</li>
                    <li>• CrewAI multi-agent orchestration</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GitBranch className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Ecosystem Coverage</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• OpenAI/GPT patterns and API best practices</li>
                    <li>• MCP (Model Context Protocol) integration</li>
                    <li>• Ollama local deployment and optimization</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Impact on Enterprise Decisions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact on Enterprise Decisions</h2>
              <p className="mb-6">
                The AI Lab was not built in isolation — every experiment, agent, and evaluation was designed to answer specific questions facing the enterprise organization:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-lg">Framework Selection</h4>
                  </div>
                  <p className="text-sm">Framework evaluations in the AI Lab directly drove the selection of <strong>Strands Agents SDK</strong> for the enterprise pipeline. The head-to-head comparisons demonstrated that Strands' model-driven tool loop pattern best matched the production pipeline agents' need for autonomous decision-making within defined tool boundaries.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-lg">Agent Architecture Patterns</h4>
                  </div>
                  <p className="text-sm">Agent architecture patterns tested locally — graph-based pipelines for structured workflows, model-driven loops for autonomous tasks — were adopted for the <strong>seven production pipeline agents</strong>. The lab provided proven patterns rather than theoretical architectures.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-lg">Model Routing Strategy</h4>
                  </div>
                  <p className="text-sm">The task-based model routing pattern — mapping different task types to appropriately-sized models — informed how the enterprise agents select models for different task types. This approach <strong>optimizes both cost and quality</strong> by matching model capability to task complexity.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-lg">Team Onboarding Standard</h4>
                  </div>
                  <p className="text-sm">The 85+ resource guide became the <strong>team's onboarding standard</strong> for the AI transition. Engineers transitioning from manual pipeline work to agent-augmented workflows use the guide and guided notebooks to build practitioner-level understanding of agentic AI systems.</p>
                </Card>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Explore the Full AI Transformation Story</h3>
              <p className="mb-6">
                The AI Development Lab represents the practitioner foundation for a broader enterprise AI transformation. See how these lab findings translated into production systems and organizational change.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/enterprise-data-transformation">
                    <Database className="w-4 h-4 mr-2" />
                    Enterprise Data Platform
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    View Other Projects
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI Lab</Badge>
                <Badge variant="secondary">LangGraph</Badge>
                <Badge variant="secondary">Strands Agents SDK</Badge>
                <Badge variant="secondary">CrewAI</Badge>
                <Badge variant="secondary">Ollama</Badge>
                <Badge variant="secondary">vLLM</Badge>
                <Badge variant="secondary">Qdrant</Badge>
                <Badge variant="secondary">RAG</Badge>
                <Badge variant="secondary">Framework Evaluation</Badge>
                <Badge variant="secondary">Practitioner AI</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIDevelopmentLab;
