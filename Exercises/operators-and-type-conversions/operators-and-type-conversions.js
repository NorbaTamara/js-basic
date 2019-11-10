// # Tasks

// # Operators/Type Conversation

// 1. Get `100` using `+` operator and numeric value `10`.
const hundred = 10 + '0';

// 2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.
const financeInfo = 'Amazon annual revenue of US$232.887 billion';
const annualRevenue = financeInfo.substring(financeInfo.indexOf('$') + 1, financeInfo.indexOf('billion'));
const monthlyIncome = `Amazon monthly income of ${Number(annualRevenue) / 12}`;

// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.
