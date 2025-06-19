import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    who: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    who,
    name,
    email,
    phone,
    message,
}) => (
    <div>
        <h1>Nouveau message de, {name} - {email}</h1>
        <h2>{who}</h2>
        <p>{message}</p>
        {phone && <p>Numéro de téléphone: {phone}</p>}
    </div>
);