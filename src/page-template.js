const generateManagers = managerArray => {
    return `
      <section class="my-3">
        <div>
        ${managerArray
          .map(({ name, id, email, officeNumber }) => {
            return ` <div class = "col-12 col-md-3 mb-2 bg-light text-dark p-3 flex-column" >
        <h3 class = "portfolio-item-title text-dark" >Name: ${name}
        <p><i class="fas fa-mug-hot"></i>Manager</p>
        </h3>
        <h5>
        id: ${id}
        <h5>
        email: <a href="mailto:${email}">${email}</a>
        </h5>
        <h5>
        Office Number: ${officeNumber}
        </h5>        
        </div>
    `;
          })
          .join('')}
      
        </div>
      </section>
    `;
}

const generateEngineers = engineerArray => {
    return `
    <section class="my-3">
      <div>
      ${engineerArray
        .map(({ name, id, email, github }) => {
          return ` <div class = "col-12 col-md-3 mb-2 bg-light text-dark p-3 flex-column" >
      <h3 class = "portfolio-item-title text-dark" >Name: ${name}
      <p><i class="fas fa-glasses"></i>Engineer</p>
      </h3>
      <h5>
      id: ${id}
      <h5>
      email: <a href="mailto:${email}">${email}</a>
      </h5>
      <h5>
      GitHub: ${github}
      </h5>        
      </div>
  `;
        })
        .join('')}
    
      </div>
    </section>
  `;
}

const generateInterns = internArray => {
    return `
    <section class="my-3">
      <div>
      ${internArray
        .map(({ name, id, email, school }) => {
          return ` <div class = "col-12 col-md-3 mb-2 bg-light text-dark p-3 flex-column" >
      <h3 class = "portfolio-item-title text-dark" >Name: ${name}
      <p><i class="fas fa-user-graduate"></i>Intern</p>
      </h3>
      <h5>
      id: ${id}
      <h5>
      email: <a href="mailto:${email}">${email}</a>
      </h5>
      <h5>
      School: ${school}
      </h5>        
      </div>
  `;
        })
        .join('')}
    
      </div>
    </section>
  `;
}

// export function to generate entire page
module.exports = templateData => {

    const managerArray = templateData.teamMembers.filter(employee => {
        return employee.getRole() === "Manager";
    });

    const engineerArray = templateData.teamMembers.filter(employee => {
        return employee.getRole() === "Engineer";
    });

    const internArray = templateData.teamMembers.filter(employee => {
        return employee.getRole() === "Intern";
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between py-3">
          <h1 class="text-secondary text-center bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container flex-row justify-space-around my-5">
        ${generateManagers(managerArray)}
        ${generateEngineers(engineerArray)}
        ${generateInterns(internArray)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2021 by David Barron</h3>
      </footer>
    </body>
    </html>
    `;
};