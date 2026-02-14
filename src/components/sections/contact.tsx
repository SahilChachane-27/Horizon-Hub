'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["123 Wall Street, Suite 500", "New York, NY 10005"] },
  { icon: Phone, title: "Phone", lines: ["+1 (212) 555-1234"] },
  { icon: Mail, title: "Email", lines: ["info@horizongroup.com"] },
  { icon: Clock, title: "Business Hours", lines: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"] },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-placeholder');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Get In Touch</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Contact us to discuss your next real estate or construction project.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {isClient && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Your Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone Number (Optional)</FormLabel><FormControl><Input placeholder="+1 (555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Project Inquiry" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Your Message</FormLabel><FormControl><Textarea placeholder="Tell us about your project..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                </form>
              </Form>
            )}
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-md space-y-6">
              <h3 className="text-xl font-bold text-primary">Contact Information</h3>
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="text-accent mt-1"><info.icon className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-semibold text-primary">{info.title}</h4>
                    {info.lines.map((line, i) => <p key={i} className="text-foreground/80">{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
            {mapImage && (
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image src={mapImage.imageUrl} alt={mapImage.description} fill className="object-cover" data-ai-hint={mapImage.imageHint} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
