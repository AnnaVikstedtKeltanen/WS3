var btn = document.getElementById('compatBtn');
        function compatClick() { alert('Compatible!'); }
        // Check for support
        if (window.addEventListener) {
            btn.addEventListener('click', compatClick); // Modern browsers
        } else if (window.attachEvent) {
            btn.attachEvent('onclick', compatClick); // Legacy Internet Explorer less than 9
        }