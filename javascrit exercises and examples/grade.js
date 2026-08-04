// Student Grade Calculator

function calculateGrade(marksObtained, totalMarks) {
    let percentage = (marksObtained / totalMarks) * 100;
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(`Marks Obtained: ${marksObtained}/${totalMarks}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
}

// Example usage:
calculateGrade(420, 500);  // You can change values here
