
const a = 5;
const b = 6;

const ans = `${a} + ${b} = ${a + b}`;
console.log(ans);


const numUnreadEmails = 0; // could be any number incl zero
// const message = 'you' + (numUnreadEmails === 0 ? 'are all caught up' : 'have ' + numUnreadEmails + ' emails');

// with template strings
const message = 'you ' + (numUnreadEmails === 0 ? 'are all caught up' : `have ${numUnreadEmails} unread emails`);
console.log(message);
