// Original guest list
var guests = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];
// Print statement about the guest who can't make it
console.log("".concat(guests[1], " can't make it to dinner."));
// Replace the guest who can't make it with a new invitee
guests[1] = 'Nikola Tesla';
// Print a second set of invitation messages
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var person = guests_1[_i];
    console.log("Dear ".concat(person, ", I would be honored to have you join me for dinner."));
}
