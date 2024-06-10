const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket(){
    const age = prompt('What is your age?');
    const isMatinee = prompt('Are you attending a matinee show?');

    if ((isMatinee === 'yes') || (isMatinee === 'y') ){
        getDiscountTicetCost(age)}
    else if((isMatinee === 'no') || (isMatinee === 'n') ){
        getBaseTicketCost(age)
    }else{
        alert('Please anwser "yes" or "no"')
    }

}


function getBaseTicketCost(age){
    
    let cost = GENERAL_ADMISSION_TICKET_COST

    if ((age <= 12) || (age >= 65)) {
        cost = CHILD_AND_SENIOR_TICKET_COST;
    }else{
        cost = GENERAL_ADMISSION_TICKET_COST
    }
    alert('Your ticket will cost: $' + cost);
}

function getDiscountTicetCost(age){
    let cost = CHILD_AND_SENIOR_TICKET_COST

    if ((age <= 12) || (age >= 65)) {
        cost = CHILD_AND_SENIOR_TICKET_COST - MATINEE_DISCOUNT;
    }else{
        cost = GENERAL_ADMISSION_TICKET_COST - MATINEE_DISCOUNT
    }
    alert('Your ticket will cost: $' + cost);
}
