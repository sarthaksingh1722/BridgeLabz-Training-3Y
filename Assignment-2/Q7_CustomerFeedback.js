// Customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback into lowercase
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.split(" ");

let wordCount = words.length;

// Check negative words
let hasBad = lowerFeedback.includes("bad");

let hasPoor = lowerFeedback.includes("poor");

// Display feedback report
console.log("------ CUSTOMER FEEDBACK ------");

console.log("Feedback:", feedback);

console.log("Total Words:", wordCount);

// Check feedback quality
if (!hasBad && !hasPoor) {

    console.log("Result: Positive Feedback");

} else {

    console.log("Result: Needs Improvement");
}

console.log("--------------------------------");