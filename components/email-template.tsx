import { EmailTemplateProps } from "@/lib/types";

export const EmailTemplate = ({ userName }: EmailTemplateProps) => (
    <div>
        <h1>Hi, {userName}!</h1>
        <p>Thank you for reaching out to me via my Portfolio. I will try to get back to you as soon as I can.</p>
        <p>For the time being, you can checkout my Resume and other socials on my Portfolio.</p>
    </div>
);
