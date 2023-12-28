'use client';

import { useForm } from '@mantine/form';
import { TextInput, Button, Textarea, Group } from '@mantine/core';
import classes from './ContactMe.module.css';


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
    };
}

export function ContactForm({translations}: translationProps) {


    const form = useForm({
        initialValues: { email: "", name: "", message: ""},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : translations.email_error),
            message: (value) => (value.length < 10 ? translations.message_error : null),
        },
    });

    return (
        <form onSubmit={form.onSubmit(console.log)}>
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
                minRows={4}
                maxRows={10}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps('message')}
            />

            <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                    {translations.button}
                </Button>
            </Group>
      </form>
    );
}