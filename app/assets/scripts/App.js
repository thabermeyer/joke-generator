document.querySelector('.joke__btn').addEventListener('click', getJokes);

function getJokes(e) {

    const number = document.querySelector('.joke__number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true) // 'true' makes it asynchronous

    xhr.onload = function() {

        if(this.status === 200) {

            const response = JSON.parse(this.responseText);

            console.log(JSON.parse(this.responseText));
            
            /*

            let output = '';
            let i = 0;

            if(response.type === 'success') {

                response.value.forEach(function(joke) {

                    i++;

                    output += 
                    
                    `<div class="joke__output-number">${i}</div>
                     <div class="joke__output-class">${joke.categories}</div> // this is an array and that's a problem
                     <div class="joke__output-content">${joke.joke}</div>
                    `

                });

            } else {

                output += '<li>Something went wrong.</li>'

            }

            document.querySelector('.joke__output').innerHTML = output;

            */

        }

    }

    xhr.send();

    e.preventDefault();

}