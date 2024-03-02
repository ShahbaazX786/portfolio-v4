'use client';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { customMessageSchema } from "@/lib/schemas";
import { customMessageDialogProps } from "@/lib/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';


const CustomMessageDialog = ({ trigger, content }: customMessageDialogProps) => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof customMessageSchema>>({
        resolver: zodResolver(customMessageSchema)
    });

    const sendCustomMessageReply = async (data: any) => {
        const response = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        if (response.status === 200) {
            toast({
                variant: 'default',
                title: "Success!",
                description: "Your Message Was Sent Sucessfully!.",
                action: <ToastAction altText="Ok">Ok</ToastAction>,
            })
        }
        else {
            toast({
                variant: 'destructive',
                title: "Uh Oh!",
                description: "There was a problem while sending Your Message!.",
                action: <ToastAction altText="Close">Close</ToastAction>,
            })
        }
    }

    const sendCustomMessage = async(data:any) => {
        const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        console.log('ok');
        console.log(response);
        if(response?.status === 200){
             toast({
                variant: 'default',
                title: "Success!",
                description: "Your Message Was Sent Sucessfully!.",
                action: <ToastAction altText="Ok">Ok</ToastAction>,
            })
        }
    }

    const handleSubmit = async (values: z.infer<typeof customMessageSchema>) => {
        console.log({ values });
        localStorage.setItem('data', JSON.stringify(values));
        await sendCustomMessage(values);
        await sendCustomMessageReply(values);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Custom Message</DialogTitle>
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
                                            <Input {...field} type='text' placeholder='Your Name' />
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
                                            <Input {...field} type='email' placeholder='yourEmail@email.com' />
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
                        <Button type="submit">Let&apos;s Go!</Button>
                    </form>
                </Form>
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CustomMessageDialog;
