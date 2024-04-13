// Use querySelectorAll to get all elements matching the selector
        const inputs = document.querySelectorAll('.controls input');
    
        function handleUpdate() {
            const suffix=this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
        }
    
        // Iterate over each input element and add the event listener
        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    