import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const API_BASE =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (isSending) return;

    setSubmitError(null);
    setIsSending(true);

    try {
      const controller = new AbortController();

      // 🔥 60 second timeout (Render cold start safe)
      const timeout = setTimeout(() => controller.abort(), 60000);

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.success) {
        throw new Error(json?.message || "Failed to send message");
      }

      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
        onSuccess?.();
      }, 3000);

    } catch (e: any) {
      if (e.name === "AbortError") {
        setSubmitError(
          "Server is waking up. Please wait a few seconds and try again."
        );
      } else {
        setSubmitError(
          e?.message || "Something went wrong. Please try again."
        );
      }
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl text-slate-800 mb-2 font-bold">
          Thank You!
        </h3>
        <p className="text-slate-600">
          We’ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm text-slate-700 mb-2 font-medium">
          Name *
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500"
          placeholder="Your full name"
          disabled={isSending}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-slate-700 mb-2 font-medium">
          Email *
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500"
          placeholder="your.email@example.com"
          disabled={isSending}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-slate-700 mb-2 font-medium">
          Phone
        </label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500"
          placeholder="+91 9876543210"
          disabled={isSending}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-slate-700 mb-2 font-medium">
          Message *
        </label>
        <textarea
          rows={5}
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
          placeholder="Tell us about your project..."
          disabled={isSending}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 transition-all"
      >
        <Send className="w-5 h-5" />
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}