// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}

// Highest score
let highestScore = Math.max(...scores);

// Lowest score
let lowestScore = Math.min(...scores);

// Calculate total using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);

// Calculate average
let averageScore = totalScore / scores.length;

// Filter students who passed
let passedStudents = scores.filter(score => score >= 50);

// Count passed students
let passCount = passedStudents.length;

// Display summary
console.log("------ PERFORMANCE REPORT ------");

console.log("Student Scores:", scores);

console.log("Highest Score:", highestScore);

console.log("Lowest Score:", lowestScore);

console.log("Average Score:", averageScore.toFixed(2));

console.log("Passed Students:", passCount);

console.log("Failed Students:", scores.length - passCount);

console.log("--------------------------------");