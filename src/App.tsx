/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100/80 py-8 px-4 sm:px-6 lg:px-10 print:p-0 print:bg-white text-slate-900">
      {/* Print & PDF Utility Guidance Banner - non-interactive informational notice */}
      <aside className="max-w-7xl mx-auto mb-6 p-4 rounded-xl bg-white border border-slate-200 shadow-sm print:hidden flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">Executive Report Layout:</span>
          <span>This document is fully structured in semantic HTML, styled for both on-screen review and high-fidelity PDF export (Cmd/Ctrl + P &rarr; Save as PDF).</span>
        </div>
        <div className="font-mono text-slate-500">
          Target: AMPM Luxury Retail · 2026 Evaluation
        </div>
      </aside>

      {/* Main Document Container (A4 / Presentation Ready) */}
      <article className="max-w-7xl mx-auto bg-white border border-slate-200/90 shadow-xl rounded-2xl overflow-hidden print:border-none print:shadow-none print:rounded-none">
        
        {/* Cover / Executive Document Header */}
        <header className="border-b border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 md:p-12 print:bg-slate-950 print:text-white">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-indigo-400 mb-2">
                <span>Enterprise CX Vendor Evaluation</span>
                <span aria-hidden="true">/</span>
                <span>AMPM Omnichannel Strategy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                ThinkOwl vs. CX Market Alternatives for AMPM
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
                Strategic comparative analysis mapped directly to AMPM’s <strong className="text-white font-semibold">Chat Support BRD</strong> and <strong className="text-white font-semibold">Unified CRM BRD</strong> across 6 Shopify storefronts, 4 flagship luxury offline stores, and international expansion desks.
              </p>
            </div>
            
            {/* Document Metadata Panel */}
            <div className="shrink-0 bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 text-xs space-y-2.5 text-slate-300 md:min-w-[260px]">
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px] font-semibold">Client Organization</span>
                <strong className="text-white text-sm font-semibold">AMPM Fashions Pvt. Ltd.</strong>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px] font-semibold">Evaluated Scope</span>
                <span className="text-slate-200">Omnichannel Chat &amp; Unified CRM</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px] font-semibold">Infrastructure Scale</span>
                <span className="text-slate-200">6 Shopify Stores + 4 Offline Boutiques</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px] font-semibold">Evaluation Date</span>
                <span className="text-slate-200">October 2026</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase tracking-wider text-[10px] font-semibold">Strategic Recommendation</span>
                <span className="text-emerald-400 font-bold">ThinkOwl (Best-Fit Core Platform)</span>
              </div>
            </div>
          </div>

          {/* Executive Strategic Premise Callout */}
          <div className="mt-8 bg-indigo-950/60 border border-indigo-500/30 rounded-xl p-6 text-slate-200">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-300 mb-2">
              Executive Premise &amp; Core Positioning
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-200 font-normal">
              <strong className="text-white font-semibold">ThinkOwl is positioned as the strongest fit</strong> because it treats customer service as <em className="text-indigo-200 font-semibold not-italic">work resolution</em> (not just messaging), unifies channels + customer 360° + workflows + reporting in one layer, and directly addresses AMPM’s acute pain points: <strong className="text-white font-semibold">Instagram reliability, Shopify + offline data unification, luxury personalization, multi-store/country desks</strong>, and <strong className="text-white font-semibold">accurate performance tracking</strong>.
            </p>
          </div>
        </header>

        {/* Executive Summary Metrics Strip */}
        <section className="bg-slate-50 border-b border-slate-200 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-r border-slate-200 pr-4 last:border-r-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Agent Daily Efficiency</span>
              <span className="text-2xl md:text-3xl font-extrabold text-indigo-900 tracking-tight block mt-1">2–3 Hours</span>
              <span className="text-xs text-slate-600 mt-1 block">Saved per agent daily via Agent Assist &amp; auto-routing</span>
            </div>
            <div className="border-r border-slate-200 pr-4 last:border-r-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Omnichannel Scope</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight block mt-1">100% Unified</span>
              <span className="text-xs text-slate-600 mt-1 block">Email, WhatsApp, IG DMs/Comments, FB, Phone &amp; Web</span>
            </div>
            <div className="border-r border-slate-200 pr-4 last:border-r-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Unified Data Footprint</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight block mt-1">6 + 4 Nodes</span>
              <span className="text-xs text-slate-600 mt-1 block">6 Shopify storefronts + 4 physical boutiques centralized</span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Deployment Timeline</span>
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-800 tracking-tight block mt-1">4–8 Weeks</span>
              <span className="text-xs text-slate-600 mt-1 block">Rapid time-to-value with dedicated India-based support</span>
            </div>
          </div>
        </section>

        {/* SECTION 1: High-Level Lens Comparison */}
        <section className="p-8 md:p-12 border-b border-slate-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-700">Section 1</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
              High-Level Lens Comparison
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-4xl leading-relaxed">
              Side-by-side strategic analysis comparing ThinkOwl against the five major alternative CX platforms under consideration for AMPM: BiteSpeed, AiSensy, Freshdesk, Interakt, and WATI.
            </p>
          </div>

          {/* Table 1: Lens Comparison */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[14%] bg-slate-950">
                    Evaluation Lens
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[18%] bg-indigo-900 text-indigo-100 border-l-2 border-indigo-400">
                    ThinkOwl (Recommended)
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[14%]">
                    BiteSpeed
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[13%]">
                    AiSensy
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[14%]">
                    Freshdesk
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[13%]">
                    Interakt
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[14%]">
                    WATI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Core focus
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    AI-driven customer service + workflow automation (resolves the work)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    E-commerce marketing, sales, support
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp marketing, bots, live agent
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Helpdesk / omnichannel service
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp + Instagram engagement
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp messaging + team inbox
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Best for AMPM
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    Full service operations + CRM-like 360° + journeys
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Marketing journeys
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp-centric campaigns
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Ticket-heavy support
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Social engagement
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Basic WhatsApp inbox
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Channels
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Email, chat, WhatsApp, social (FB/IG + comments/stories), phone, custom, mobile app, live chat widget
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp, voice, email, SMS, social, web chat
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Mainly WhatsApp
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Email, web chat, WhatsApp, FB, IG (Omni add-on)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp, Instagram
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp + limited social/web
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Customer history
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    One connected history across all channels
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Conversation-level
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Mostly WhatsApp threads
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Ticket-based
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Chat-level
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Team inbox history
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    AI for agents
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Agent Assist (contextual suggestions + reply drafting)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bots for marketing/sales
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp AI agents + bot flows
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Freddy AI (plan/add-on dependent)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Chatbot / AnswerBot
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Copilot (credits / add-on)
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    AI agents
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    For eligible workflows with seamless human handoff
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    E-commerce AI agents
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp AI agents
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Freddy AI Agent (plan-dependent)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Chatbot-led
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Astra AI Agents (may be add-on)
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Workflows
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Visual low-code/no-code (trigger &rarr; action &rarr; status &rarr; exception)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Journeys + routing
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    No-code bot flows + broadcasts
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Ticket routing + assignment rules
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bot flows + campaign workflows
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bots, keyword rules, triggers
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Business rules
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Configurable rules + escalations per team/market
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Routing rules
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Basic bot logic
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Assignment + SLA rules
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Keyword + trigger rules
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Keyword rules
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Human handoff
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    Agent receives full history + next step (not a cold ticket)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Routing to agents
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bot to live agent
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Ticket assignment
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bot to agent
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Bot to operator
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    SLA &amp; escalation
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    Ageing, ownership, escalation visible + breach alerts
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Workload view
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Limited
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Strong SLA automation
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Limited
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Limited
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Reports
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Customizable, clickable, drill into channel/team/agent (last 7/15/custom dates)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Agent analytics, workload
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Broadcast + click analytics
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Dashboards (plan-limited)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Conversation + agent analytics
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Operator reports (plan limits)
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Campaigns + service
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    Both in one platform
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Strong cross-channel marketing
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Broadcasts, segmentation, ads
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Mostly service (separate campaign tool likely)
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    WhatsApp campaigns
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Broadcasts + automation
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Order/delivery context
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Order/shipping data in the case via supported integrations
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Strong e-commerce focus
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Via integrations
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Via connectors
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Via integrations
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Via integrations
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50 bg-slate-50/20">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Multi-country / desks
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-semibold align-top border-l-2 border-indigo-400">
                    Country-specific desks, multiple teams
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Not highlighted
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Not highlighted
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Groups + portals
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Roles by plan
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Users by plan
                  </td>
                </tr>

                <tr className="divide-x divide-slate-200 hover:bg-slate-50/50">
                  <th scope="row" className="p-3.5 font-bold text-slate-900 bg-slate-50/70 align-top">
                    Pricing clarity
                  </th>
                  <td className="p-3.5 bg-indigo-50/50 text-indigo-950 font-medium align-top border-l-2 border-indigo-400">
                    Included capabilities, transparent pricing
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Subscription + channels + usage + implementation
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Subscription + Meta charges
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Omni plan + AI add-ons + connectors
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Plan inclusions + roles + Meta fees
                  </td>
                  <td className="p-3.5 text-slate-700 align-top">
                    Users + AI credits + Meta fees
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: Capability Matrix (BRD Alignment) */}
        <section className="p-8 md:p-12 border-b border-slate-200 bg-slate-50/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-indigo-700">Section 2</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
                Capability Matrix (BRD Alignment)
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                Exhaustive mapping against every functional requirement specified in AMPM’s Chat Support BRD and Unified CRM BRD.
              </p>
            </div>

            {/* Accessible Legend */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs flex flex-wrap items-center gap-5 shadow-sm">
              <span className="font-semibold text-slate-700">Legend:</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800">
                <span className="text-emerald-700 text-base leading-none">●</span> Built-in &amp; Core
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-amber-800">
                <span className="text-amber-600 text-base leading-none">◐</span> Partial / Plan or Add-on Dependent
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                <span className="text-slate-400 text-base leading-none">○</span> Not a Highlighted Strength
              </span>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[35%] bg-slate-950">
                    Capability (from AMPM BRDs)
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[13%] text-center bg-indigo-900 text-indigo-100 border-l-2 border-indigo-400">
                    ThinkOwl
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[10%] text-center">
                    BiteSpeed
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[10%] text-center">
                    AiSensy
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[11%] text-center">
                    Freshdesk
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[10%] text-center">
                    Interakt
                  </th>
                  <th scope="col" className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-[11%] text-center">
                    WATI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">

                {/* Subcategory: Channel Coverage */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    1. Channel Coverage
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">WhatsApp Business API (official)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Email (in + out)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Instagram DMs + Comments + Story mentions</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Facebook DMs + Comments</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Call / phone</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Mobile app + Live chat widget</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Single unified inbox (no silos)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>

                {/* Subcategory: Agent Management */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    2. Agent Management
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Shift-based assignment + login/logout timestamps</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Availability (online/offline/away)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Role-based (admin / supervisor / agent)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Supervisor monitor + take-over</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Collision detection</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>

                {/* Subcategory: Chat Handling & Routing */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    3. Chat Handling &amp; Routing
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Auto first response (per channel) + blackout hours</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Manual override + auto-assignment by channel/tag/availability</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Keyword-triggered routing</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">SLA timers + breach alerts + escalation</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Canned / quick responses</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>

                {/* Subcategory: Platform Issues to Resolve */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    4. Platform Issues to Resolve (AMPM Pain Points)
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Instagram image tagging visibility + native reply sync</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Accurate chat/agent performance (7/15/custom dates)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>

                {/* Subcategory: Customer 360 Profile */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    5. Customer 360° Profile
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Purchase history (Shopify orders, dates, items, value)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Category preference, returns/exchanges, geography</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Custom fields (size, styling) + segment tags (VIP, etc.)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">LTV + last interaction date/channel</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Visible inside chat window</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>

                {/* Subcategory: Automation & Workflows */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    6. Automation &amp; Workflows
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Trigger-based (order confirmed/shipped/delivered/return)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Chatbot flows + human handoff</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">After-hours auto-reply + sentiment flagging</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Journey builder + multi-channel orchestration</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>

                {/* Subcategory: Reporting & Analytics */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    7. Reporting &amp; Analytics
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Agent metrics (FRT, resolution, volume)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Channel-wise volume + CSAT + SLA compliance</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Exportable (CSV/Excel)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>

                {/* Subcategory: Unified CRM Needs */}
                <tr className="bg-slate-100 text-slate-800">
                  <th colSpan={7} scope="colgroup" className="py-2.5 px-3.5 font-extrabold uppercase tracking-wider text-[11px] text-slate-700">
                    8. Unified CRM Needs (Omnichannel Retail Architecture)
                  </th>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Online + offline customer data centralization</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Segmentation (purchasers, abandoned cart, category/product behaviour)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-amber-700">◐</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Geo-wise dashboards + campaign tracking</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>
                <tr className="divide-x divide-slate-200 hover:bg-slate-50/60">
                  <td className="p-3 pl-6 font-medium text-slate-800">Required journeys (welcome, abandoned cart, post-purchase, win-back)</td>
                  <td className="p-3 text-center bg-indigo-50/50 font-bold text-emerald-800 border-l-2 border-indigo-400">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-normal text-slate-400">○</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                  <td className="p-3 text-center font-bold text-emerald-800">●</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: Direct BRD Match Highlights – Why ThinkOwl Wins */}
        <section className="p-8 md:p-12 border-b border-slate-200">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-700">Section 3</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
              Direct BRD Match Highlights – Why ThinkOwl Wins
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-4xl leading-relaxed">
              Granular analysis of where each alternative falls short against AMPM’s specific luxury retail operational needs, and why ThinkOwl delivers superior business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Match 1: vs BiteSpeed */}
            <article className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">
                    ThinkOwl vs. BiteSpeed
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    E-commerce Marketing vs. Full Service
                  </span>
                </div>
                <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Where BiteSpeed falls short:</strong> Excellent for top-of-funnel marketing journeys, WhatsApp popups, and conversational sales, but significantly weaker on critical post-purchase service work (complex returns, multi-piece exchanges, escalations, cross-channel interaction history, agent collision detection, and full Instagram comment/story reliability).
                  </p>
                  <p>
                    <strong className="text-indigo-900 font-semibold">How ThinkOwl solves it:</strong> ThinkOwl owns the <em className="text-indigo-950 font-semibold not-italic">full resolution loop</em>. An agent handling an exchange has full access to the customer’s Shopify orders, store credit status, previous WhatsApp queries, and offline boutique preferences, with visual low-code workflows routing tasks automatically to logistics or luxury personal stylists.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-900">
                <span>Core Distinction</span>
                <span className="bg-indigo-50 text-indigo-700 py-1 px-2.5 rounded text-[11px]">Work Resolution vs. Chat Campaigning</span>
              </div>
            </article>

            {/* Match 2: vs AiSensy */}
            <article className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">
                    ThinkOwl vs. AiSensy
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Single-Channel vs. True Omnichannel
                  </span>
                </div>
                <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Where AiSensy falls short:</strong> Strong WhatsApp-centric broadcast tool, but severely siloed. It lacks official inbound/outbound email management, Instagram DMs, comment streams, story mentions, Facebook messaging, voice call logging, unified inboxes, offline customer profile merging, and strict SLA escalation logic.
                  </p>
                  <p>
                    <strong className="text-indigo-900 font-semibold">How ThinkOwl solves it:</strong> AMPM customers communicate across email (concierge inquiries), Instagram (VIP styling requests), and WhatsApp (order updates). ThinkOwl binds all touchpoints into one continuous timeline so customer service doesn’t force clients to repeat themselves.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-900">
                <span>Core Distinction</span>
                <span className="bg-indigo-50 text-indigo-700 py-1 px-2.5 rounded text-[11px]">Full Omnichannel Depth vs. WhatsApp Island</span>
              </div>
            </article>

            {/* Match 3: vs Freshdesk */}
            <article className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">
                    ThinkOwl vs. Freshdesk
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Siloed Add-ons vs. Unified Architecture
                  </span>
                </div>
                <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Where Freshdesk falls short:</strong> Solid traditional ticketing system, but achieving AMPM’s requirements requires the expensive Freshdesk Omni plan plus multiple paid add-ons (Freddy AI, third-party connectors, and separate campaign software). Its Instagram image tagging/reply sync and continuous conversational history remain brittle.
                  </p>
                  <p>
                    <strong className="text-indigo-900 font-semibold">How ThinkOwl solves it:</strong> ThinkOwl delivers an integrated, modern service layer without the bloat. Built-in Agent Assist, native Instagram reliability, visual workflow engines, and transparent license tiers prevent unexpected escalating SaaS and connector expenses.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-900">
                <span>Core Distinction</span>
                <span className="bg-indigo-50 text-indigo-700 py-1 px-2.5 rounded text-[11px]">Modern Work Engine vs. Legacy Ticket Fragmentation</span>
              </div>
            </article>

            {/* Match 4: vs Interakt & WATI */}
            <article className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">
                    ThinkOwl vs. Interakt / WATI
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Broadcast Inboxes vs. Enterprise Governance
                  </span>
                </div>
                <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Where Interakt &amp; WATI fall short:</strong> Competent at WhatsApp marketing, catalog broadcasting, and simple live agent chat. However, they lack essential enterprise governance: shift-based login/logout tracking, agent collision detection, supervisor live monitoring with silent whisper and takeover, multi-country desks, and granular SLA breach workflows.
                  </p>
                  <p>
                    <strong className="text-indigo-900 font-semibold">How ThinkOwl solves it:</strong> ThinkOwl transforms conversational engagement into operational luxury excellence. Supervisors have instant oversight across retail desks, workload rebalancing, and drill-down analytics across 7/15/custom day intervals.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-900">
                <span>Core Distinction</span>
                <span className="bg-indigo-50 text-indigo-700 py-1 px-2.5 rounded text-[11px]">Enterprise Operations vs. Basic Shared Inbox</span>
              </div>
            </article>

          </div>
        </section>

        {/* SECTION 4: Key Takeaways for AMPM Co-Founders & Management */}
        <section className="p-8 md:p-12 border-b border-slate-200 bg-slate-50/30">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-700">Section 4</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
              Key Strategic Takeaways for AMPM Co-Founders &amp; Management
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-4xl leading-relaxed">
              Why ThinkOwl represents the highest-conviction operational investment for AMPM’s luxury brand trajectory, international footprint, and customer retention goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Pillar 1 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 01</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Multi-Brand &amp; Multi-Country Desks
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Purpose-built country desks, segregated team routing, and specialized AI triage handle AMPM’s <strong>6 Shopify storefronts + 4 offline flagship boutiques</strong> without creating cross-market data silos or operational confusion.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 02</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Rapid Implementation &amp; Scalability
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                A streamlined <strong>4–8 week deployment cycle</strong> delivers rapid time-to-value across domestic and global storefronts, with pre-engineered connectors for Shopify, WhatsApp Cloud API, and boutique POS systems.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 03</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Strong ROI &amp; Quantified Efficiency
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Documented <strong>2–3 hours saved per concierge agent daily</strong> through contextual Agent Assist suggestions, automated case enrichment, collision prevention, and zero-loss human handoffs.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 04</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Enhanced Luxury Customer Experience
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Unified <strong>Customer 360° dossier inside the active conversation</strong> (Shopify order items, offline store visits, silhouette preferences, LTV, and VIP tags) empowers agents to provide bespoke, white-glove styling advisory.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 05</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Seamless Integration &amp; Enterprise Security
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Flexible REST/GraphQL APIs for bi-directional Shopify order sync, real-time middleware support, and strict role-based access control ensure luxury VIP patron privacy and airtight compliance.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="text-indigo-700 font-mono text-xs font-bold tracking-widest uppercase mb-1">Pillar 06</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Dedicated Local India Support
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Hands-on, India-based enterprise implementation and after-sales team ensuring hands-on staff training, zero transition downtime, proactive performance audits, and immediate escalation turnaround.
              </p>
            </div>

          </div>

          {/* Strategic Conclusion Callout */}
          <div className="mt-8 p-6 rounded-xl bg-slate-900 text-white border border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-indigo-400 font-mono text-xs uppercase tracking-wider block font-semibold mb-1">
                  Executive Bottom Line
                </span>
                <p className="text-base md:text-lg font-medium text-slate-100">
                  <em className="text-white font-bold not-italic">"Most tools answer customers. ThinkOwl resolves the work."</em>
                </p>
                <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  For AMPM’s combination of omnichannel service reliability, Customer 360° depth, automation, and multi-store luxury operational standards, ThinkOwl is the clearest, most robust best-fit choice.
                </p>
              </div>
              <div className="shrink-0 bg-indigo-900/60 border border-indigo-500/40 px-4 py-2.5 rounded-lg text-xs font-semibold text-indigo-200 text-center">
                Recommended Action: Proceed to ThinkOwl Sandbox Pilot
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Proposed Implementation Phasing (Week 1 - 8) */}
        <section className="p-8 md:p-12 border-b border-slate-200">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-700">Section 5</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mt-1 tracking-tight">
              AMPM Implementation Phasing &amp; Rollout Roadmap
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-4xl leading-relaxed">
              Structured 4-stage deployment architecture designed for zero disruption to ongoing boutique sales and e-commerce peak seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-slate-200 rounded-xl p-5 bg-white">
              <span className="text-xs font-bold text-indigo-800 block mb-1">Phase 1 · Weeks 1–2</span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Discovery &amp; Architecture</h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>AMPM BRD requirement sign-off</li>
                <li>WhatsApp &amp; Meta business manager integration</li>
                <li>Shopify multi-store API authentication</li>
                <li>Role definitions (Admins, Supervisors, Agents)</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 bg-white">
              <span className="text-xs font-bold text-indigo-800 block mb-1">Phase 2 · Weeks 3–4</span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Integration &amp; Workflows</h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Shopify + Offline POS 360° sync</li>
                <li>Instagram DMs, comments &amp; story routing</li>
                <li>After-hours &amp; blackout rule automation</li>
                <li>SLA timers, tier-2 escalation hierarchies</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 bg-white">
              <span className="text-xs font-bold text-indigo-800 block mb-1">Phase 3 · Weeks 5–6</span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Training &amp; Pilot Run</h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Concierge agent &amp; supervisor training</li>
                <li>Pilot launch on 2 Shopify storefronts</li>
                <li>Collision detection &amp; takeover calibration</li>
                <li>Agent Assist template tuning</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 bg-white">
              <span className="text-xs font-bold text-indigo-800 block mb-1">Phase 4 · Weeks 7–8</span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Full Go-Live &amp; Optimization</h3>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Go-live across all 6 Shopify stores</li>
                <li>Centralized offline boutique desk activation</li>
                <li>Executive KPI dashboard review</li>
                <li>Post-purchase automated journey activation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Document Footer */}
        <footer className="p-6 md:p-8 bg-slate-900 text-slate-400 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-slate-200">ThinkOwl Strategic Assessment for AMPM</span>
            <span className="mx-2">·</span>
            <span>Presentation &amp; PDF-Ready Executive Dossier</span>
          </div>
          <div className="text-slate-500 font-mono text-[11px]">
            Confidential · Prepared for AMPM Executive Board · October 2026
          </div>
        </footer>

      </article>
    </main>
  );
}
