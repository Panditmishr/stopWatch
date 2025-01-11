const time = document.querySelector('span');
        const btn = document.querySelectorAll('button');
        
        let h = 0;
        let m = 0;
        let s = 0;
        let timer = null;

        function stopWatch() {
            s++;
            if (s === 60) {
                s = 0;
                m++;
                if (m === 60) {
                    m = 0;
                    h++;
                }
            }
            // Format time with leading zero if needed
           time.innerText =  `${(h < 10 ? '0' + h : h)}:${(m < 10 ? '0' + m : m)}:${(s < 10 ? '0' + s : s)}`;
        }

        // Start button
        btn[0].addEventListener('click', () => {
            if (timer === null) {
                timer = setInterval(stopWatch, 1000);
            }
        });

        // Stop button
        btn[1].addEventListener('click', () => {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
            }
        });

        // Reset button
        btn[2].addEventListener('click', () => {
            clearInterval(timer);
            timer = null;
            h = 0;
            m = 0;
            s = 0;
            time.innerText = '00:00:00';
            
        });