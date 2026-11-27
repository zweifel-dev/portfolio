import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cpu, Database, BookOpen, Brain, Mail, Layers, FolderOpen, Search, FlaskConical, Workflow, Shield, RefreshCw, Send, GitBranch, Lightbulb, GraduationCap, Microscope, Target, Users, ArrowRight, Notebook, Globe, TestTube, FileText, Gauge, Box, Cog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';

const AIDevelopmentLab: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Lab"
        title="AI Development Lab"
        lead="Three working agents and hands-on evaluations of four agentic AI frameworks, built and run on my own hardware."
      />

      <div className="page-container page-section">
        <div className="max-w-4xl mx-auto">
          <div>
            {/* Header */}
            <div className="mb-10 border-b pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  I built a fully local AI development platform on Ollama, vLLM and Qdrant, with three working agents and a setup for comparing agent frameworks. Building and benchmarking agents across several frameworks is how I form the judgment behind my architecture decisions: which framework fits which job, where agents fail, and how much review they need.
                </p>
                <p>
                  I think a leader asking a team to adopt AI should have built with it first. Here I write the agent code, benchmark the inference engines and compare the frameworks myself, and what I learn goes with me to the teams I lead.
                </p>
              </div>
            </section>

            {/* Platform Architecture */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Platform architecture</h2>
              <p className="mb-6">
                The lab runs entirely on my own hardware, so I control model choice, data privacy and cost. Compute, storage and orchestration are separate layers:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Ollama (Port 11434)</h4>
                  </div>
                  <p className="text-sm mb-2">The main model runtime, serving 9+ models for different kinds of tasks. Most agent work runs here by default, since it supports a wide range of models and is simple to run locally.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Supports models from 3B to 14B+ parameters</li>
                    <li>• Hot-swap models without restarting services</li>
                    <li>• OpenAI-compatible API, so the frameworks plug straight in</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">vLLM (Port 8000)</h4>
                  </div>
                  <p className="text-sm mb-2">A faster inference engine for heavy workloads. I use it when batch jobs or concurrent requests are more than Ollama handles well.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Continuous batching for higher throughput</li>
                    <li>• PagedAttention for efficient memory management</li>
                    <li>• Benchmarked against Ollama for latency and tokens-per-second</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Qdrant (Port 6333)</h4>
                  </div>
                  <p className="text-sm mb-2">The vector database for semantic search and RAG. It stores embedded research papers and email content that all the agents search by similarity.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Collections for research papers, email clusters, and experiments</li>
                    <li>• Payload filtering for metadata-driven search refinement</li>
                    <li>• REST and gRPC APIs for flexible integration</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Task-based model routing</h4>
                  </div>
                  <p className="text-sm mb-2">A shared router maps each kind of task to a model of the right size. Agent code asks the router instead of hardcoding a model, so I can change models in one place.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Fast tasks</strong> → phi3:mini (low latency, simple extraction)</li>
                    <li>• <strong>Research</strong> → qwen3:14b (nuanced summarization)</li>
                    <li>• <strong>Reasoning</strong> → deepseek-r1:14b (chain-of-thought tasks)</li>
                    <li>• <strong>Embedding</strong> → nomic-embed-text (vector generation)</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="w-6 h-6 text-muted-foreground" />
                    <h4 className="font-bold text-lg">Split storage</h4>
                  </div>
                  <p className="text-sm">Code lives on an SSD so development stays fast. Data (models, vector stores, outputs and logs) lives on a separate, larger drive, which leaves room for big model files and growing vector collections.</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Three Production Agents */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Three working agents</h2>
              <p className="mb-6">
                I built the agents on different frameworks to see the trade-offs between graph-based pipelines and model-driven agent loops in practice:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Research Agent (LangGraph)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    A daily digest of AI papers from six sources: ArXiv, Semantic Scholar, OpenAlex, DBLP, RSS feeds and HuggingFace. Each day it summarizes the new papers most relevant to my interests.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-foreground mb-2">Pipeline</p>
                    <p className="text-sm text-muted-foreground">Fetches → Filters by relevance → Embeds in Qdrant → Summarizes → Delivers as markdown/JSON/email</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Graph pipeline:</strong> Each stage is a LangGraph node with explicit edges, so the flow is easy to debug and change</li>
                    <li><strong>Relevance filtering:</strong> An LLM scores papers against configurable research interests before embedding</li>
                    <li><strong>Several outputs:</strong> The same digest as markdown files, structured JSON and formatted email</li>
                    <li><strong>Incremental runs:</strong> Remembers papers it has already seen, so later runs skip them</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary" className="mr-1">LangGraph</Badge>
                    <Badge variant="secondary" className="mr-1">RAG</Badge>
                    <Badge variant="secondary" className="mr-1">Multi-Source</Badge>
                    <Badge variant="secondary">Qdrant</Badge>
                  </div>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Email Agent (LangGraph)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Organizes a Gmail inbox of 5,000+ emails. It clusters email by sender domain, has an LLM name the groups and flag spam, then applies Gmail labels. It never deletes a message.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-foreground mb-2">Design pattern</p>
                    <p className="text-sm text-muted-foreground">Code handles the volume (Python clustering) and the LLM handles the judgment (naming and classification). That keeps it cheap and predictable.</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Hybrid processing:</strong> Python does the heavy lifting of clustering 5,000+ emails by domain; the LLM only judges cluster names and spam likelihood</li>
                    <li><strong>Safe by default:</strong> Only labels, never deletes. A dry-run mode previews changes before they're applied</li>
                    <li><strong>Checkpoints:</strong> Each run processes only the emails that arrived since the last one</li>
                    <li><strong>Gmail API:</strong> Reads the inbox, creates labels, and applies labels through the Gmail API</li>
                  </ul>
                  <div className="mt-3">
                    <Badge variant="secondary" className="mr-1">LangGraph</Badge>
                    <Badge variant="secondary" className="mr-1">Gmail API</Badge>
                    <Badge variant="secondary" className="mr-1">Clustering</Badge>
                    <Badge variant="secondary">Safety-First</Badge>
                  </div>
                </Card>

                <Card className="p-6 border-l-[3px] border-l-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Knowledge Agent (Strands Agents SDK)</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Interactive RAG Q&A over the stored research papers. The model decides on its own whether to search Qdrant, pull up a paper's details or answer from what it already has, which is the model-driven tool loop pattern.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-3">
                    <p className="text-sm font-medium text-foreground mb-2">How it differs</p>
                    <p className="text-sm text-muted-foreground">In the LangGraph agents, I define the flow. The Strands agent lets the model decide which tools to call and when, which is a very different way to design an agent.</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Model-driven tool loop:</strong> Given a question, the agent picks its own approach: search vectors, retrieve full papers or answer directly</li>
                    <li><strong>Qdrant:</strong> Semantic search over embedded research papers with metadata filtering</li>
                    <li><strong>Conversation history:</strong> Keeps the conversation so you can ask follow-up questions</li>
                    <li><strong>Framework check:</strong> Showed that the Strands SDK holds up on production-style workloads</li>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Framework evaluations</h2>
              <p className="mb-6">
                The lab has eight experiment notebooks that compare frameworks head to head. Each one runs a real workload and measures trade-offs that matter in production:
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">LangGraph vs CrewAI vs Strands</h4>
                  </div>
                  <p className="text-sm mb-2">Compared on agent loop flexibility, tool integration, error handling, and developer experience.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• LangGraph: best for structured, multi-step pipelines</li>
                    <li>• Strands: best for model-driven tool loops</li>
                    <li>• CrewAI: best for multi-agent role orchestration</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Microscope className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Embedding model comparison</h4>
                  </div>
                  <p className="text-sm mb-2">Benchmarked on relevance, speed and memory use.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Compared nomic-embed-text, mxbai-embed-large, and others</li>
                    <li>• Measured retrieval quality on real research corpus</li>
                    <li>• Evaluated memory vs. quality trade-offs for local deployment</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Classification strategies</h4>
                  </div>
                  <p className="text-sm mb-2">Compared ways of sorting content into categories.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Zero-shot vs. few-shot classification accuracy</li>
                    <li>• Prompt engineering effects on categorization quality</li>
                    <li>• Model size vs. classification performance</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TestTube className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Temperature</h4>
                  </div>
                  <p className="text-sm mb-2">Tested how temperature and other parameters trade accuracy against creativity.</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Learning setup</h2>
              <p className="mb-6">
                Besides the agents, the lab has notebooks, a dashboard and docs for learning AI engineering hands-on:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Notebook className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">8 guided notebooks</h4>
                  </div>
                  <p className="text-sm mb-3">Step-by-step notebooks that walk through core concepts with working code:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Model routing patterns and shared utility design</li>
                    <li>• RAG fundamentals: embedding, indexing, retrieval and generation</li>
                    <li>• LangGraph patterns: nodes, edges, state management and conditional routing</li>
                    <li>• CrewAI multi-agent orchestration: roles, tasks and crew assembly</li>
                    <li>• Strands Agents SDK: tool definitions, agent loops and model-driven execution</li>
                    <li>• Shared utilities: clients, configuration and reusable components</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">8 experiment notebooks</h4>
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
                    <Globe className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Web dashboard</h4>
                  </div>
                  <p className="text-sm mb-3">A FastAPI backend and SPA frontend that put the whole lab in one place:</p>
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
                    <FileText className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Documentation and tests</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Documentation:</strong> Services, frameworks, agents, architecture, daily workflow, model routing, endpoints, and integrations</li>
                    <li><strong>Tests:</strong> Unit tests for all shared utilities and clients, integration tests for each agent's full pipeline</li>
                    <li><strong>Runbooks:</strong> Step-by-step guides for starting services, running agents and troubleshooting failures</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Design Philosophy */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Design principles</h2>
              <p className="mb-6">
                Five principles came out of building and running these agents:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">1. Pick the framework for the job</h4>
                  </div>
                  <p className="text-sm">Graph pipelines (LangGraph) for structured multi-step workflows, model-driven agent loops (Strands) for open-ended tool use, and multi-agent orchestration (CrewAI) for role-based collaboration. The side-by-side comparisons showed me that no single framework is best at everything.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">2. Code handles volume, LLMs handle judgment</h4>
                  </div>
                  <p className="text-sm">Email clustering is pure Python; naming clusters uses the LLM. Research paper fetching is deterministic code; relevance scoring uses the LLM. LLMs are expensive and nondeterministic, so I only use them where a judgment call is needed, which keeps costs down and results predictable.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">3. Safe by default</h4>
                  </div>
                  <p className="text-sm">The email agent only labels, never deletes. Dry-run modes are available everywhere. No agent workflow auto-merges. Agents that touch real data need guardrails, especially locally, where no approval workflow will catch a mistake.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">4. Process only what's new</h4>
                  </div>
                  <p className="text-sm">Checkpoints let each run handle only new data. The research agent remembers the papers it has seen, and the email agent remembers the message IDs it has processed, so daily runs are quick and nothing is done twice.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Send className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">5. One pipeline, several outputs</h4>
                  </div>
                  <p className="text-sm">The same content goes out as markdown, JSON and email. I can read the research digest as a markdown file, load it into code as JSON, or skim it as a morning email.</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Agentic AI Resource Guide */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agentic AI resource guide</h2>


              <p className="mb-4">
                I wrote a guide to 85+ resources on agentic AI, from the foundational research to running agents in production:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Architecture and design</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Architecture patterns and system design for AI agents</li>
                    <li>• Production operations and deployment patterns</li>
                    <li>• Evaluation methodology and benchmarking</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Foundational research</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ReAct: Reasoning and Acting in Language Models</li>
                    <li>• Chain of Thought and Tree of Thoughts prompting</li>
                    <li>• CoALA: Cognitive Architectures for Language Agents</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Frameworks</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Strands Agents SDK architecture and patterns</li>
                    <li>• LangChain/LangGraph ecosystem and best practices</li>
                    <li>• CrewAI multi-agent orchestration</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GitBranch className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg">Ecosystem</h4>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• OpenAI/GPT patterns and API best practices</li>
                    <li>• MCP (Model Context Protocol) integration</li>
                    <li>• Ollama local deployment and optimization</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* What the lab taught me */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What the lab taught me</h2>
              <p className="mb-6">
                Each experiment and agent answers a question I would otherwise be guessing at as a leader:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Choosing a framework</h4>
                  </div>
                  <p className="text-sm">Head-to-head comparisons show where each framework fits. The Strands Agents SDK's model-driven tool loop suits agents that need to make their own decisions within defined tool boundaries; graph-based LangGraph suits structured, auditable workflows.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Agent architecture</h4>
                  </div>
                  <p className="text-sm">I've run graph-based pipelines for structured workflows and model-driven loops for open-ended tasks on real workloads, so the patterns I recommend are ones I've tested.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Model routing</h4>
                  </div>
                  <p className="text-sm">I pick models for any agent the way the lab's router does: each type of task goes to a model sized for it. Matching the model to how hard the task is keeps costs down without hurting quality.</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Teaching others</h4>
                  </div>
                  <p className="text-sm">The 85+ resource guide and guided notebooks give engineers moving from manual pipeline work to agent-augmented workflows a hands-on way into agentic AI.</p>
                </Card>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Keep exploring</h3>
              <p className="mb-6">
                The lab is where I test ideas before asking a team to rely on them. The PROVE pattern for agent reasoning grew out of the same work, and the AI-Augmented SDLC case study describes the operating model these patterns serve.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/prove-pattern">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    The PROVE Pattern
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/ai-augmented-sdlc">
                    <Workflow className="w-4 h-4 mr-2" />
                    The AI-Augmented SDLC
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDevelopmentLab;
