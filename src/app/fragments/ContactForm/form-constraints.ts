export const formConstraints = {
    sender: {
        minLength: 3,
        maxLength: 40,
        pattern: '[a-zA-Z ]{3,40}',
        title: 'Your name can only contain letters and naturally be between 3 and 40 caracaters.'
    },
    company: {
        minLength: 1,
        maxLength: 40,
        pattern: '[a-zA-Z1-9 ]{1,40}'
    },
    message: {
        minLength: 20,
        maxLength: 400
    }
};