'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle2, Loader2 } from 'lucide-react'

export type OrderModalProps = {
  open: boolean
  onClose: () => void
  services: string[]
  defaultService?: string
}

export function OrderModal({ open, onClose, services, defaultService }: OrderModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [form, setForm] = useState({
    name: '',
    service: defaultService ?? services[0],
    phone: '',
    message: '',
  })

  useEffect(() => {
    if (open) {
      setStatus('idle')
      setForm((f) => ({ ...f, service: defaultService ?? services[0] }))
    }
  }, [open, defaultService, services])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('done'), 1200)
  }

  const field =
    'w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-lime focus:ring-1 focus:ring-lime'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="অর্ডার ফর্ম"
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h3 className="text-base font-bold text-foreground">যোগাযোগ ও অর্ডার ফর্ম</h3>
            <p className="font-en text-xs text-muted-foreground">Service Request Form</p>
          </div>
          <button
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-lime hover:text-lime"
          >
            <X className="size-4" />
          </button>
        </div>

        {status === 'done' ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <CheckCircle2 className="size-12 text-lime" />
            <h4 className="text-lg font-bold text-foreground">ধন্যবাদ, {form.name || 'গ্রাহক'}!</h4>
            <p className="text-sm text-muted-foreground">
              আপনার অনুরোধ সফলভাবে গৃহীত হয়েছে। আমাদের টিম শীঘ্রই
              <span className="font-en"> {form.phone || 'আপনার নম্বরে'} </span>
              যোগাযোগ করবে।
            </p>
            <button
              onClick={onClose}
              className="mt-2 rounded-lg bg-lime px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              ঠিক আছে
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4 px-5 py-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">নাম</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="আপনার পূর্ণ নাম"
                className={field}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">সেবার ধরন</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={field}
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-secondary">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">ফোন নম্বর</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="01XXXXXXXXX"
                className={`${field} font-en`}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">বার্তা</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="আপনার প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন..."
                className={`${field} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex items-center justify-center gap-2 rounded-lg bg-lime px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> প্রসেস হচ্ছে...
                </>
              ) : (
                'সাবমিট করুন'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
