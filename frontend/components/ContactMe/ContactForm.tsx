'use client';

import { useForm } from '@mantine/form';
import { TextInput, Button, Textarea, Group, Text } from '@mantine/core';
import classes from './ContactMe.module.css';
import { sendEmail } from '@/utils/send-email';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';


interface translationProps {
    translations: {
        email_placeholder: string;
        email_error: string;
        name: string;
        name_placeholder: string;
        message: string;
        message_placeholder: string;
        message_error: string;
        button: string;
        email_sent: string;
        form_error: string;
    };
}

export type FormData = {
    email: string;
    name: string;
    message: string;
};


export function ContactForm({translations}: translationProps) {
    const [loading, { toggle }] = useDisclosure();
    const [formStatus, setFormStatus] = useState<string>('form');

    const form = useForm<FormData>({
        initialValues: { email: "", name: "", message: ""},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : translations.email_error),
            message: (value) => (value.length < 10 ? translations.message_error : null),
        },
    });

    async function handleSubmit(e: FormData) {
        toggle();

        try {
            const response = await sendEmail(e);
            setFormStatus(response);
        } catch (error) {
            setFormStatus('error');
        }
    }


    return (
        <>
            {formStatus == 'form' && (
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label="Email"
                        placeholder={translations.email_placeholder}
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        label={translations.name}
                        placeholder={translations.name_placeholder}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        required
                        label={translations.message}
                        placeholder={translations.message_placeholder}
                        autosize
                        minRows={2}
                        maxRows={10}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                        {...form.getInputProps('message')}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button loading={loading} type="submit" className={classes.control}>
                            {translations.button}
                        </Button>
                    </Group>
                </form>
            )}
            {formStatus == 'Email sent' && (
                <Text className={classes.form_result}>
                    {translations.email_sent}
                </Text>
            )}
            {formStatus == 'error' && (
                <Text className={classes.form_result}>
                    {translations.form_error}
                </Text>
            )}
        </>
    );
}