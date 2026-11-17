import { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ArrowUpRight,
} from 'lucide-react';
import {
  WELCOME_MESSAGE,
  SUGGESTED_QUESTIONS,
  getPortfolioAssistantReply,
} from '../utils/portfolioAssistant';

const INITIAL_MESSAGES = [
  {
    id: 'welcome',
    sender: 'assistant',
    text: WELCOME_MESSAGE,
    links: [],
  },
];

const INITIAL_CONTEXT = {
  lastIntent: null,
  lastEntity: null,
  lastEntityType: null,
  responseLanguage: 'en',
};

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [conversationContext, setConversationContext] = useState(INITIAL_CONTEXT);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const submitQuestion = (questionText) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      links: [],
    };

    const reply = getPortfolioAssistantReply(trimmed, conversationContext);
    const assistantMsg = {
      id: `assistant-${Date.now() + 1}`,
      sender: 'assistant',
      text: reply.text,
      links: reply.links || [],
    };

    if (reply.context) {
      setConversationContext(reply.context);
    }
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(input);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setConversationContext(INITIAL_CONTEXT);
    setInput('');
    inputRef.current?.focus();
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <section
          aria-label="Fairuz Portfolio Assistant"
          className="mb-3 flex w-[calc(100vw-2rem)] sm:w-[390px] max-h-[min(78vh,560px)] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-12px_rgba(16,23,42,0.28)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-[#10172A] px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4361EE] font-mono text-xs font-semibold text-white">
                FF
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold leading-tight">
                  Fairuz Portfolio Assistant
                </h2>
                <p className="text-[11px] font-mono text-slate-300">
                  Portfolio Q&amp;A
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close assistant"
                aria-label="Close assistant"
                className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div
            role="log"
            aria-live="polite"
            className="flex-1 overflow-y-auto bg-[#F8FAFC] px-4 py-4 space-y-3"
          >
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      isUser
                        ? 'rounded-br-sm bg-[#10172A] text-white'
                        : 'rounded-bl-sm border border-slate-200/90 bg-white text-[#10172A] shadow-2xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {msg.links.map((link) => (
                          <a
                            key={`${link.label}-${link.href}`}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={
                              link.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="inline-flex items-center gap-1 rounded-md border border-[#4361EE]/25 bg-[#4361EE]/8 px-2 py-1 text-[11px] font-medium text-[#4361EE] hover:bg-[#4361EE] hover:text-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {showSuggestions && (
              <div className="pt-1">
                <p className="mb-2 font-mono text-[11px] font-medium text-slate-500">
                  Suggested questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => submitQuestion(question)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs font-medium text-[#10172A] hover:border-[#4361EE]/50 hover:text-[#4361EE] transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
          >
            <label htmlFor="assistant-input" className="sr-only">
              Ask a question about Fairuz's portfolio
            </label>
            <input
              ref={inputRef}
              id="assistant-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects, skills, education..."
              className="flex-1 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs sm:text-sm text-[#10172A] placeholder:text-slate-400 focus:border-[#4361EE] focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4361EE] text-white hover:bg-[#7257FF] disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        className="inline-flex items-center gap-2.5 rounded-full bg-[#10172A] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(16,23,42,0.45)] hover:bg-[#4361EE] hover:shadow-[0_12px_28px_-6px_rgba(67,97,238,0.5)] transition-all"
      >
        {isOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <MessageSquare className="h-4 w-4 text-[#4361EE] group-hover:text-white" />
        )}
        <span className="hidden sm:inline">
          {isOpen ? 'Close' : 'Portfolio Assistant'}
        </span>
      </button>
    </div>
  );
}
