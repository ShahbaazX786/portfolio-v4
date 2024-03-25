'use client';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { customMessageSchema } from "@/lib/schemas";
import { customMessageDialogProps } from "@/lib/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';



const CustomMessageDialog = ({ trigger, content }: customMessageDialogProps) => {
    const form = useForm<z.infer<typeof customMessageSchema>>({
        resolver: zodResolver(customMessageSchema)
    });

    const [dialogopen, setDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendCustomMessageReply = async (data: any) => {
        const response = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        if (response.status === 200) {
            toast.success("Success!", {
                duration:10000,
                description: "Check your email inbox for a special message 😉!.",
                action: {
                    label: 'Cool',
                    onClick: () => toast.dismiss()
                },
            });
        }
        else {
            toast.error("Uh Oh 😶!", {
                duration: 10000,
                description: "Seems like there was a problem while sending a special reply to your inbox!.",
                action: {
                    label: 'Okay',
                    onClick: () => toast.dismiss()
                },
            });
        }
    }

    const sendCustomMessage = async (formData: any) => {
        setLoading(true);
        const data = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
        if (data?.status == 200) {
            toast.success("Success!", {
                duration: 10000,
                description: "Your Message Was Sent Sucessfully!.",
                action: {
                    label: 'Ok',
                    onClick: () => toast.dismiss()
                },
            });
            await sendCustomMessageReply(formData);
        } else {
            toast.error("Oops 😶!", {
                duration: 10000,
                description: "It seems like your message was not sent succesfully!",
                action: {
                    label: 'Close',
                    onClick: () => toast.dismiss()
                },
            });
        }
        setLoading(false);
        setDialogOpen(false);
    }

    const handleSubmit = async (values: z.infer<typeof customMessageSchema>) => {
        await sendCustomMessage(values);
        form.reset();
    }

    return (
        <Dialog open={dialogopen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="mb-2">Custom Message</DialogTitle>
                    <DialogDescription>
                        I check Custom Messages less often, but I will try to respond back if it is a good message.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full flex flex-col gap-4 items-start '>
                        <FormField control={form.control} name="name" render={({ field }) => {
                            return <FormItem>
                                <div className='flex flex-row justify-center items-baseline gap-4'>
                                    <FormLabel>Name</FormLabel>
                                    <span className='flex flex-col justify-start gap-1'>
                                        <FormControl>
                                            <Input {...field} type='text' placeholder='Charles Xavier II' />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </span>
                                </div>
                            </FormItem>
                        }} />
                        <FormField control={form.control} name="email" render={({ field }) => {
                            return <FormItem>
                                <div className='flex flex-row justify-center items-baseline gap-4'>
                                    <FormLabel>Email</FormLabel>
                                    <span className='flex flex-col justify-start'>
                                        <FormControl>
                                            <Input {...field} type='email' placeholder='example@email.com' />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </span>
                                </div>
                            </FormItem>
                        }} />
                        <FormField control={form.control} name="message" render={({ field }) => {
                            return <FormItem>
                                <div className='w-full'>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder='Your Message' rows={5} cols={100} />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </div>
                            </FormItem>
                        }} />
                        <Button type="submit" disabled={loading} className="mt-2">
                            {loading && <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />}
                            Let&apos;s Go!
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CustomMessageDialog;
