let expression = '';

        function num(value) {
            expression += value;
            document.getElementById('display').value = expression;
        }

        function del() {
            expression = expression.slice(0, -1);
            document.getElementById('display').value = expression;
        }

        function reset() {
            expression = '';
            document.getElementById('display').value = '';
        }

        function calculate() {
            try {
                const result = eval(expression);
                if (typeof result === 'number' && !Number.isInteger(result)) {
                    document.getElementById('display').value = result.toFixed(2);
                } else {
                    document.getElementById('display').value = result;
                }
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }