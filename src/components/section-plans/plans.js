var plans = [
    {
        id: 1,
        plan: 'Premium',
        pricePerMonth: '$399',
        pricePerMeal: 'That’s only $13.30 per meal',
        features: [
            '1 meal every day',
            'Order 24/7',
            'Access to newest creations',
            'Free delivery'
        ],
        buttonClass: 'btn btn-full'
    },
    {
        id: 2,
        plan: 'Pro',
        pricePerMonth: '$149',
        pricePerMeal: 'That’s only $14.90 per meal',
        features: [
            '1 meal 10 days/month',
            'Order 24/7',
            'Access to newest creations',
            'Free delivery'
        ],
        buttonClass: 'btn btn-ghost'
    },
    {
        id: 3,
        plan: 'Starter',
        pricePerMonth: '',
        pricePerMeal: '$19',
        features: [
            '1 meal',
            'Order from 8 am to 12 pm',
            '',
            'Free delivery'
        ],
        buttonClass: 'btn btn-ghost'
    }
];

export default plans;

// Plan 1: Premium
// 399$ per month
// That’s only 13.30$ per meal
// 1 meal every day
// Order 24/7
// Access to newest creations
// Free delivery


// Plan 2: Pro
// 149$ per month
// That’s only 14.90$ per meal
// 1 meal 10 days/month
// Order 24/7
// Access to newest creations
// Free delivery


// Plan 3: Starter
// 19$ per meal
// 1 meal
// Order from 8 am to 12 pm
// Free delivery
