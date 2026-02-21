
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Mail, PhoneCall, Microscope, FlaskConical, BookOpen, Atom, Dna } from "lucide-react";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters.")
    .max(255, "Name must be less than 255 characters.")
    .regex(/^[a-zA-Z\s\-\.]+$/, "Name can only contain letters, spaces, hyphens, and dots"),
  email: z.string()
    .email("Please enter a valid email address.")
    .max(255, "Email must be less than 255 characters."),
  mobile: z.string()
    .min(10, "Mobile number must be at least 10 digits.")
    .max(20, "Mobile number must be less than 20 digits.")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please provide a valid phone number"),
  hasIssn: z.enum(["yes", "no"], {
    required_error: "Please select an option.",
  }),
  message: z.string().max(2000, "Message must be less than 2000 characters.").optional(),
});

export default function StartJournalPage() {
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", mobile: "", hasIssn: undefined, message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Submitted!",
      description: "Our technical team will contact you shortly to guide you through the process.",
    });
    form.reset();
  }

  // Generate random floating bubbles
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 10}s`,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#198bea] via-[#1570c7] to-[#1570c7] -mt-20 pt-32 pb-24">
          <div className="absolute inset-0">
            {/* Icons */}
            <div className="absolute top-1/4 left-[10%] animate-float opacity-10">
              <Microscope className="w-24 h-24 text-white" />
            </div>
            <div className="absolute top-1/3 right-[15%] animate-float opacity-10" style={{ animationDelay: '2s' }}>
              <FlaskConical className="w-20 h-20 text-white" />
            </div>
            <div className="absolute bottom-1/4 left-[15%] animate-float opacity-10" style={{ animationDelay: '1s' }}>
              <BookOpen className="w-28 h-28 text-white" />
            </div>
            <div className="absolute top-1/2 right-[10%] animate-float opacity-10" style={{ animationDelay: '3s' }}>
              <Atom className="w-32 h-32 text-white" />
            </div>
            <div className="absolute bottom-1/3 right-[20%] animate-float opacity-10" style={{ animationDelay: '1.5s' }}>
              <Dna className="w-24 h-24 text-white" />
            </div>

            {/* Bubbles */}
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  animationDelay: bubble.delay,
                  animationDuration: bubble.duration,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white font-headline animate-slideUp">
                Start Your Journal with ScholarJMS
              </h1>
              <p className="max-w-5xl mx-auto text-lg sm:text-xl text-white/90 animate-slideUp delay-200 font-medium">
                Fill out the form below and our team will get back to you shortly
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 animate-slideUp delay-300">
                <a 
                  href="mailto:scholarjms@gmail.com?subject=Hi ScholarJMS 👋, I’m interested in starting my own journal." 
                  className="flex items-center gap-2 hover:text-white transition-colors border-r border-white/20 pr-8"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-bold">Email:</span> scholarjms@gmail.com
                </a>
                <a 
                  href="tel:+918200385143" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-bold">Mobile:</span> +91 8200385143
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full absolute bottom-0 left-0 -mb-1 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.95"></path>
            </svg>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[#1570c7]/5 py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-funky shadow-2xl border border-border/50">
              {isClient && (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Full Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Email Address <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email address" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-bold">Mobile Number <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your mobile number" {...field} className="rounded-xl h-12 border-input focus:ring-primary/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="hasIssn"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-bold">Do you have ISSN for your journal? <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid md:grid-cols-2 gap-4"
                            >
                              <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                <RadioGroupItem value="yes" id="issn-yes" className="text-primary focus:ring-primary" />
                                <FormLabel htmlFor="issn-yes" className="font-normal cursor-pointer flex-1">
                                  Yes, I have ISSN
                                </FormLabel>
                              </div>
                              <div className="flex items-center space-x-3 border rounded-xl p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                <RadioGroupItem value="no" id="issn-no" className="text-primary focus:ring-primary" />
                                <FormLabel htmlFor="issn-no" className="font-normal cursor-pointer flex-1">
                                  No, I want to start a new journal
                                </FormLabel>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold">Additional Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about your requirements..." 
                              className="rounded-xl min-h-[120px] border-input focus:ring-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-funky py-8 text-xl font-bold shadow-xl transition-all hover:scale-[1.01]">
                      Submit Inquiry
                    </Button>
                    
                    <p className="text-sm text-center text-muted-foreground mt-4">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </Form>
              )}
            </div>
            
            <div className="text-center mt-12 text-sm text-muted-foreground">
              <p>Need help? Contact us at <a href="mailto:scholarjms@gmail.com" className="text-primary font-bold hover:underline">scholarjms@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translate(0); }
          25% { transform: translateY(-20px) translate(10px); }
          50% { transform: translateY(-10px) translate(-10px); }
          75% { transform: translateY(-30px) translate(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}
