var element = document.getElementById('a');
        // This overwrites the previous onclick
        element.onclick = function() { alert('First!'); };
        element.onclick = function() { alert('Second!'); }; // Only this one executes
        // These both function (multiple)
        element.addEventListener('click', function() { alert('Third!'); });
        element.addEventListener('click', function() { alert('Fourth!'); });