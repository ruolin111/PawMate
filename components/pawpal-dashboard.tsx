"use client";

import { FormEvent, useState } from "react";
import {
  BellRing,
  Bot,
  Check,
  ChevronDown,
  Dog,
  Ellipsis,
  MessageCirclePlus,
  Plus,
  Send,
  Sparkles,
  Stethoscope,
  Utensils,
  Footprints,
} from "lucide-react";
import { pets } from "@/data/pets";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi Biscuit’s owner, when did she last eat?",
  },
  { id: 2, role: "user", text: "This morning around 8am" },
  {
    id: 3,
    role: "assistant",
    text: "Logged. Next meal is around 5:30pm, and a walk before that would be good since it’s warm out today.",
  },
];

const fieldClass =
  "h-11 w-full rounded-xl border border-ink/10 bg-white px-3.5 text-sm text-ink outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/10";

export function PawPalDashboard() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [activeChat, setActiveChat] = useState("Biscuit / Feeding schedule");
  const [mealOpen, setMealOpen] = useState(false);
  const [reminderOpen, setReminderOpen] = useState(false);
  const [fedTime, setFedTime] = useState("8:00am");
  const [repeat, setRepeat] = useState("Weekly");
  const [weekdays, setWeekdays] = useState(["Wed"]);
  const [toast, setToast] = useState("");

  function notify(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const timestamp = Date.now();
    setMessages((current) => [
      ...current,
      { id: timestamp, role: "user", text },
      {
        id: timestamp + 1,
        role: "assistant",
        text: "I’ve got it. I’ll keep that in Biscuit’s care context and help you plan the next step.",
      },
    ]);
    setDraft("");
  }

  function saveMeal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const time = String(form.get("time"));
    setFedTime(time);
    setMealOpen(false);
    notify(`Meal logged for ${time}`);
  }

  function saveReminder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setReminderOpen(false);
    notify(`${String(form.get("type"))} reminder set for ${String(form.get("time"))}`);
  }

  return (
    <>
      <div className="grid min-h-[calc(100vh-77px)] gap-4 p-4 sm:p-5 xl:grid-cols-[270px_minmax(430px,1fr)_310px] 2xl:grid-cols-[290px_minmax(520px,1fr)_340px]">
        <aside className="order-2 rounded-[1.7rem] border border-ink/[0.07] bg-paper p-4 shadow-card xl:order-1">
          <div className="flex items-center justify-between px-1 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-muted">Your space</p>
              <h2 className="mt-1 text-lg font-bold text-ink">Pets & chats</h2>
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10" aria-label="More options">
              <Ellipsis className="h-4 w-4" />
            </button>
          </div>
          <Button
            variant="soft"
            className="mb-5 w-full"
            onClick={() => notify("Pet setup is ready for the next step")}
          >
            <Plus className="h-4 w-4" /> Add pet
          </Button>

          <div className="space-y-3">
            {pets.map((pet) => (
              <section key={pet.id} className="rounded-2xl border border-ink/[0.07] bg-white p-3">
                <div className="flex items-center gap-3 px-1 py-1">
                  <span className={cn("grid h-10 w-10 place-items-center rounded-xl text-ink", pet.color)}>
                    <Dog className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-ink">{pet.name}</h3>
                    <p className="truncate text-[11px] text-muted">{pet.breed} · {pet.age}</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted" />
                </div>
                <div className="mt-3 space-y-1 border-t border-ink/[0.06] pt-2">
                  {pet.chats.map((chat, index) => {
                    const key = `${pet.name} / ${chat}`;
                    const active = activeChat.toLowerCase() === key.toLowerCase();
                    const Icon = index === 0 ? Utensils : index === 1 ? Footprints : Stethoscope;
                    return (
                      <button
                        key={chat}
                        onClick={() => setActiveChat(key)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition",
                          active ? "bg-mist text-ink" : "text-muted hover:bg-ink/[0.035] hover:text-ink",
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" /> {chat}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => notify(`New chat ready for ${pet.name}`)}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold text-clay hover:bg-peach/35"
                  >
                    <MessageCirclePlus className="h-3.5 w-3.5" /> Add chat
                  </button>
                </div>
              </section>
            ))}
          </div>
        </aside>

        <section className="order-1 flex min-h-[660px] flex-col overflow-hidden rounded-[1.7rem] border border-ink/[0.07] bg-paper shadow-card xl:order-2">
          <header className="flex items-center justify-between border-b border-ink/[0.07] px-5 py-4 sm:px-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">PawPal conversation</p>
              <h1 className="mt-1 text-lg font-bold capitalize text-ink">{activeChat}</h1>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3EE] px-3 py-1.5 text-[11px] font-bold text-[#567B61]">
              <span className="h-2 w-2 rounded-full bg-[#6FA47A]" /> Context on
            </span>
          </header>

          <div className="flex-1 space-y-6 overflow-y-auto px-5 py-7 sm:px-8">
            <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl bg-ink/[0.035] px-4 py-3 text-xs leading-5 text-muted">
              <Sparkles className="h-4 w-4 shrink-0 text-clay" />
              PawPal uses Biscuit’s routines to give more useful, personal answers.
            </div>
            <div className="mx-auto max-w-2xl space-y-5" aria-live="polite">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-3",
                    message.role === "user" && "justify-end",
                  )}
                >
                  {message.role === "assistant" && (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-white shadow-sm">
                      <Bot className="h-4 w-4" />
                    </span>
                  )}
                  <div
                    className={cn(
                      "max-w-[82%] rounded-[1.35rem] px-4 py-3 text-sm leading-6 sm:max-w-[72%]",
                      message.role === "assistant"
                        ? "rounded-bl-md bg-ink/[0.055] text-ink"
                        : "rounded-br-md bg-ink text-white",
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto flex max-w-2xl flex-wrap gap-2 border-t border-ink/[0.07] pt-5">
              <Button variant="soft" onClick={() => setMealOpen(true)}>
                <Utensils className="h-4 w-4" /> Log meal
              </Button>
              <Button variant="secondary" onClick={() => setReminderOpen(true)}>
                <BellRing className="h-4 w-4" /> Set reminder
              </Button>
            </div>
          </div>

          <form onSubmit={sendMessage} className="border-t border-ink/[0.07] bg-white/70 p-4 sm:p-5">
            <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-2xl border border-ink/10 bg-white p-2 pl-4 shadow-sm transition focus-within:border-sage focus-within:ring-4 focus-within:ring-sage/10">
              <label className="sr-only" htmlFor="pawpal-message">Message PawPal about Biscuit</label>
              <input
                id="pawpal-message"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Message PawPal about Biscuit"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted"
              />
              <button type="submit" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-white transition hover:bg-[#244660]" aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[10px] text-muted/75">PawPal can help organize care, but it doesn’t replace your veterinarian.</p>
          </form>
        </section>

        <aside className="order-3 space-y-4">
          <Card className="overflow-hidden p-5">
            <div className="relative mb-5 h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F1D9BB] to-[#DCA96D]">
              <span className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-white/25" />
              <Dog className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 text-ink/70" strokeWidth={1.3} />
              <span className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold text-ink shadow-sm">Good day</span>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-ink">Biscuit</h2>
              <p className="mt-1 text-sm text-muted">Golden retriever · 3yo</p>
            </div>
            <div className="mt-6 border-t border-ink/[0.07] pt-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-ink">Today’s summary</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Jul 8</span>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Utensils, label: `Fed ${fedTime}`, tone: "bg-peach" },
                  { icon: Footprints, label: "Walk due 5:30pm", tone: "bg-mist" },
                  { icon: Check, label: "No meds today", tone: "bg-butter" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-ink/75">
                    <span className={cn("grid h-8 w-8 place-items-center rounded-xl text-ink", item.tone)}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="border-[#BED6CE] bg-[#E5F0EC] p-5 shadow-none">
            <span className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-ink text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#567B61]">AI insight</p>
            <p className="mt-2 text-sm leading-6 text-ink/75">
              PawPal noticed Biscuit usually eats dinner around 5:30–6:00pm. Want to set that as a recurring reminder?
            </p>
            <button onClick={() => setReminderOpen(true)} className="mt-4 text-xs font-bold text-ink underline decoration-sage underline-offset-4">Set recurring reminder</button>
          </Card>
        </aside>
      </div>

      <Modal open={mealOpen} onClose={() => setMealOpen(false)} title="Log a meal for Biscuit">
        <form onSubmit={saveMeal} className="space-y-4">
          <label className="block text-sm font-semibold text-ink">
            Time
            <input name="time" defaultValue="8:00am" className={cn(fieldClass, "mt-2")} />
          </label>
          <label className="block text-sm font-semibold text-ink">
            Food
            <input name="food" defaultValue="kibble, 1 cup" className={cn(fieldClass, "mt-2")} />
          </label>
          <label className="block text-sm font-semibold text-ink">
            Notes <span className="font-normal text-muted">(optional)</span>
            <textarea name="notes" defaultValue="ate well" rows={3} className={cn(fieldClass, "mt-2 h-auto resize-none py-3")} />
          </label>
          <div className="flex justify-end gap-3 pt-3">
            <Button variant="ghost" onClick={() => setMealOpen(false)}>Cancel</Button>
            <Button type="submit">Save meal</Button>
          </div>
        </form>
      </Modal>

      <Modal open={reminderOpen} onClose={() => setReminderOpen(false)} title="Set a reminder for Biscuit">
        <form onSubmit={saveReminder} className="space-y-4">
          <label className="block text-sm font-semibold text-ink">
            Reminder type
            <select name="type" defaultValue="Walk" className={cn(fieldClass, "mt-2")}>
              {["Walk", "Meal", "Medication", "Grooming", "Vet visit"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Time
              <input name="time" defaultValue="5:30pm" className={cn(fieldClass, "mt-2")} />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Repeat
              <select name="repeat" value={repeat} onChange={(event) => setRepeat(event.target.value)} className={cn(fieldClass, "mt-2")}>
                {["Once", "Daily", "Weekly", "Monthly"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <label className="block text-sm font-semibold text-ink">
            Starts on
            <input name="date" type="date" defaultValue="2026-07-08" className={cn(fieldClass, "mt-2")} />
          </label>
          {repeat === "Weekly" && (
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-ink">Repeats on</legend>
              <div className="flex flex-wrap gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
                  const selected = weekdays.includes(day);
                  return (
                    <button
                      type="button"
                      key={day}
                      aria-pressed={selected}
                      onClick={() => setWeekdays((current) => selected ? current.filter((item) => item !== day) : [...current, day])}
                      className={cn(
                        "grid h-10 min-w-10 place-items-center rounded-full px-3 text-xs font-bold transition",
                        selected ? "bg-ink text-white" : "bg-ink/5 text-muted hover:bg-ink/10",
                      )}
                    >
                      {day.slice(0, 1)}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}
          <div className="flex justify-end gap-3 pt-3">
            <Button variant="ghost" onClick={() => setReminderOpen(false)}>Cancel</Button>
            <Button type="submit">Save reminder</Button>
          </div>
        </form>
      </Modal>

      {toast && (
        <div role="status" className="fixed bottom-5 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft">
          <Check className="h-4 w-4 text-butter" /> {toast}
        </div>
      )}
    </>
  );
}
