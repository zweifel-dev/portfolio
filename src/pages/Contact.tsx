import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { inquiriesConfigured } from "@/lib/firebase-config";
import { limits, sendInquiry, topics, type Topic } from "@/lib/inquiry";

const field =
  "mt-2 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-base shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";
const labelClass = "block text-sm font-medium text-foreground";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent"; name: string } | { state: "error"; message: string };

const isTopic = (v: string | null): v is Topic => topics.some((t) => t.value === v);

const Contact = () => {
  const [params] = useSearchParams();
  const initialTopic = params.get("topic");
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // A field people can't see: anything typed into it came from a bot
    if (String(data.get("website") ?? "")) {
      setStatus({ state: "sent", name: "" });
      return;
    }
    const inquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organization: String(data.get("organization") ?? "").trim(),
      topic: String(data.get("topic")) as Topic,
      body: String(data.get("body") ?? "").trim(),
    };
    if (!inquiriesConfigured()) {
      setStatus({ state: "error", message: `The form isn't connected yet. Please email ${company.email} for now.` });
      return;
    }
    setStatus({ state: "sending" });
    try {
      await sendInquiry(inquiry);
      form.reset();
      setStatus({ state: "sent", name: inquiry.name.split(" ")[0] });
    } catch {
      setStatus({ state: "error", message: `Your message didn't go through. Please try again, or email ${company.email}.` });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lead="Tell us what you're building or changing. You'll get a reply by email."
      />

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          {status.state === "sent" ? (
            <div className="ruled-card p-8" role="status">
              <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4">Thanks{status.name ? `, ${status.name}` : ""}. Your message is in.</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">The reply will come from {company.email}.</p>
              <Button className="mt-6" variant="outline" onClick={() => setStatus({ state: "idle" })}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5" aria-label="Contact form" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Name
                  <input name="name" required maxLength={limits.name} autoComplete="name" className={field} />
                </label>
                <label className={labelClass}>
                  Email
                  <input name="email" type="email" required maxLength={limits.email} autoComplete="email" className={field} />
                </label>
              </div>
              <label className={labelClass}>
                Company or team <span className="font-normal text-muted-foreground">(optional)</span>
                <input name="organization" maxLength={limits.organization} autoComplete="organization" className={field} />
              </label>
              <label className={labelClass}>
                What's it about?
                <select name="topic" defaultValue={isTopic(initialTopic) ? initialTopic : "engagement"} className={field}>
                  {topics.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Message
                <textarea
                  name="body"
                  required
                  minLength={10}
                  maxLength={limits.body}
                  rows={7}
                  className={field}
                  placeholder="What you're working on, who's involved and when you need it."
                />
              </label>
              {/* Honeypot: hidden from people and screen readers, filled in only by bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {status.state === "error" && (
                <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {status.message}
                </p>
              )}
              <div>
                <Button type="submit" size="lg" disabled={status.state === "sending"}>
                  {status.state === "sending" ? "Sending…" : "Send message"}
                </Button>
              </div>
            </form>
          )}

          <aside className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Using a product?</p>
              <p className="leading-relaxed text-muted-foreground">
                Privacy policies, terms and data deletion for Midnight Alibi and Vulpen Design are on the support page.
              </p>
              <Link to="/support" className="arrow-link mt-2">
                Product support <ArrowRight />
              </Link>
            </div>
            <div>
              <p className="eyebrow mb-3">Prefer email?</p>
              <a href={`mailto:${company.email}`} className="inline-flex min-h-11 items-center font-medium text-primary underline-offset-4 hover:underline">
                {company.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Mail</p>
              <address className="not-italic leading-relaxed text-muted-foreground">
                {company.mailingAddress.slice(1).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
