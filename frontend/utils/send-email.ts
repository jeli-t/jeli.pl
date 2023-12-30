type FormData = {
    email: string;
    name: string;
    message: string;
};

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result.message;
    } catch (error) {
        // Handle errors or rethrow the error if needed
        throw error;
    }
}
