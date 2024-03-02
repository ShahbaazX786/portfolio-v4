import React, { ReactElement } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/textarea'

export type DialogREProps = {
    trigger: string | ReactElement,
    content?: string | ReactElement;
}

const formSchema = z.object({
    name: z.string().min(2).max(200),
    email: z.string().email(),
    message: z.string().min(5).max(200)
})

const DialogRE = ({ trigger, content }: DialogREProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values});
        localStorage.setItem('data', JSON.stringify(values));
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

export default DialogRE;