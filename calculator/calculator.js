document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('input[type="button"]');
    const display = document.getElementById('display');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value.trim();

            if (value === 'C') {
                expression = '';
                display.value = '';
            } else if (value === 'DEL') {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (value === '=') {
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch {
                    display.value = 'Error';
                    expression = '';
                }
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
