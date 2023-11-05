
// State
const state = {
    start: ["sheep","sheep","sheep"],
    target: [],
  };
  
  // References
  const startingBank = document.querySelector("#startingBank ul");
  const targetBank = document.querySelector("#targetBank ul");
  const form = document.querySelector("form");
  
  // TODO: Add event listener so that sheep are added when the form is submitted


 form.addEventListener("submit", (event) => {
    event.preventDefault();
    const numsheep = form.elements.numsheep.value;
    for (let i = 0; i < numsheep; i++) {
      state.start.push("sheep");
    }
    form.elements.numsheep.value = "";
    render();
    });

    GamepadButton.addEventListener("click", (event) => {
        event.preventDefault();
        const numsheep = form.elements.numsheep.value;
        for (let i = 0; i < numsheep; i++) {
          state.start.push("sheep");
        }
        form.elements.numsheep.value = "";
        render();
        }

  const trargetSheep = document.querySelector("#targetBank ul");