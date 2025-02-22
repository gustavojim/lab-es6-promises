// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;    
        getInstruction("mashedPotatoes", 4, (step5) => { 
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  return obtainInstruction("steak", 1);
  })
        obtainInstruction('steak', 1)
        .then((step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        return obtainInstruction("steak", 2);
        })
              obtainInstruction('steak', 2)
              .then((step0) => {
              document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
              return obtainInstruction("steak", 3);
              })
                    obtainInstruction('steak', 3)
                    .then((step0) => {
                    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
                    return obtainInstruction("steak", 4);
                    })
                          obtainInstruction('steak', 4)
                          .then((step0) => {
                          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
                          return obtainInstruction("steak", 5);
                          })
                                  obtainInstruction('steak', 5)
                                  .then((step0) => {
                                  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
                                  return obtainInstruction("steak", 6);

                                  })
                                        obtainInstruction('steak', 6)
                                        .then((step0) => {
                                        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                                        return obtainInstruction("steak", 7);     
                                        })
                                                obtainInstruction('steak', 7)
                                                .then((step0) => {
                                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                
                                                })
                                                .catch((err) => {
                                                  console.log(err)
                                                  document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`
                                                  document.querySelector("#steakImg").removeAttribute("hidden");
                                                })

// Iteration 3 using async/await

async function makeBroccoli() {

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!!!!</li>`;
}
makeBroccoli();

// Bonus 2 - Promise all

async function makeBrussels() {
  const tarea0 = obtainInstruction('brusselsSprouts', 0);
  const tarea1 = obtainInstruction('brusselsSprouts', 1);
  const tarea2 = obtainInstruction('brusselsSprouts', 2);
  const tarea3 = obtainInstruction('brusselsSprouts', 3);
  const tarea4 = obtainInstruction('brusselsSprouts', 4);
  const tarea5 = obtainInstruction('brusselsSprouts', 5);
  const tarea6 = obtainInstruction('brusselsSprouts', 6);
  const tarea7 = obtainInstruction('brusselsSprouts', 7);

  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso0}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso1}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso2}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso3}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso4}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso5}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso6}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${paso7}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}

makeBrussels();
