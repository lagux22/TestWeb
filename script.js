function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const bmi = weight / (height * height);
    const result = document.getElementById('bmiResult');

    if (isNaN(bmi)) {
        result.textContent = 'Please enter valid weight and height.';
    } else {
        result.textContent = `Your BMI is ${bmi.toFixed(1)}`;
    }
}

function calculateZodiac() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    const result = document.getElementById('zodiacResult');

    const zodiacSigns = [
        { name: 'Capricorn', start: [1, 1], end: [1, 19] },
        { name: 'Aquarius', start: [1, 20], end: [2, 18] },
        { name: 'Pisces', start: [2, 19], end: [3, 20] },
        { name: 'Aries', start: [3, 21], end: [4, 19] },
        { name: 'Taurus', start: [4, 20], end: [5, 20] },
        { name: 'Gemini', start: [5, 21], end: [6, 20] },
        { name: 'Cancer', start: [6, 21], end: [7, 22] },
        { name: 'Leo', start: [7, 23], end: [8, 22] },
        { name: 'Virgo', start: [8, 23], end: [9, 22] },
        { name: 'Libra', start: [9, 23], end: [10, 22] },
        { name: 'Scorpio', start: [10, 23], end: [11, 21] },
        { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
        { name: 'Capricorn', start: [12, 22], end: [12, 31] }
    ];

    const zodiac = zodiacSigns.find(sign => {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;
        return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay);
    });

    if (zodiac) {
        result.textContent = `Your zodiac sign is ${zodiac.name}`;
    } else {
        result.textContent = 'Please enter a valid date.';
    }
}

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate2').value);
    const today = new Date();
    const result = document.getElementById('ageResult');

    if (isNaN(birthdate.getTime())) {
        result.textContent = 'Please enter a valid date.';
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    result.textContent = `Your age is ${age} years old`;
}

// Add this new function at the end of the file
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    const calculators = document.querySelectorAll('.calculator');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Update active states
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide calculators
            calculators.forEach(calc => {
                if (calc.id === targetId) {
                    calc.classList.add('active');
                } else {
                    calc.classList.remove('active');
                }
            });
        });
    });
}

// Call the initNavigation function when the page loads
document.addEventListener('DOMContentLoaded', initNavigation);