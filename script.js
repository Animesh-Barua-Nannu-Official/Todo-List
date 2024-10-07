 // Function to display empty message
        function empty() {
            let table = document.getElementById('table');
            if (localStorage.length == 0) {
                table.innerHTML = `<div class="alert alert-danger" id='at' role="alert">
                    <h5>Todo List is Empty !</h5><br>
                    <p>Please Enter Your Todos</p>
                </div>`;
            } else {
                table.innerHTML = ''; // Clear the empty message
            }
        }

        // Run empty() on load to check if there are any todos
        empty();

        // Handle form submission
        const handle = () => {
            let title = document.getElementById('title').value;
            let desc = document.getElementById('description').value;
            
            if (title && desc) {
                localStorage.setItem(title, desc); // Store the values in localStorage
                document.getElementById('title').value = ''; // Clear the input fields
                document.getElementById('description').value = '';
                empty(); // Check if the list is no longer empty
                document.getElementsByClassName('table')[0].tHead.innerHTML = `<tr>
                      <th scope="col">Sno.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Time</th>
                      <th scope="col">Delete</th>
                    </tr>`
                count = 1
                document.getElementsByClassName('table')[0].tBodies[0].innerHTML =''
                for (let i in localStorage){
                    if(i=='length'){
                        break
                    }
                    document.getElementsByClassName('table')[0].tBodies[0].innerHTML += ` 
                    <tr>
                      <th scope="row">${count}</th>
                      <td>${i}</td>
                      <td>${localStorage.getItem(i)}</td>
                      <td>${new Date().toLocaleString()}</td>
                      <td><button type="button" class="btn btn-danger">Delete</button></td>
                    </tr>`
                    count += 1
                }
            } else {
                alert("Please fill in both the Title and Description fields!"); // Show alert if any field is empty
            }
        };

        // Attach event listener to the button
        let but = document.getElementById('button');
        but.addEventListener('click', handle);