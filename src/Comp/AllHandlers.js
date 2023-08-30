

export function clickhandler(e) {
  e.target.style.transform = "translateX(1.5px) translateY(1px)";
  setTimeout(() => {
    e.target.style.transform = "translateX(-1.5px) translateY(-1px)";
  }, 100);
}

export function ChangeHandler(e, sugges_state, setstate, setvalue) {
  console.log("hello");
  setvalue(e.target.value);
  if (e.target.value) {
    setstate({
      ...sugges_state,
      display: "block",
      height: "0px",
    });
    setTimeout(() => {
      setstate({
        ...sugges_state,
        display: "block",
        height: "200px",
      });
    }, 500);
  } else {
    setstate({
      ...sugges_state,
      height: "0px",
    });
    setTimeout(() => {
      setstate({
        ...sugges_state,
        display: "none",
      });
    }, 1000);
  }
}
export function MouseEnter(e,dis_items,setdisplay,main){
  
    console.log(main);
    if (main === "Cataglog") {
      setdisplay({
        ...dis_items,
        display: "flex",
        width: "50%",
      });
    } else {
      setdisplay({
        ...dis_items,
        display: "flex",
        width: "15%",
      });
    }
}
export function MouseLeave(e, dis_items, setdisplay, main,checkerstate) {
  console.log("gone inside case of categories leave function",checkerstate);
  if (!checkerstate) {
    setTimeout(() => {
      setdisplay({
        ...dis_items,
        display: "none",
      });
    }, 2000);
  } 
  
}
export function specialcase(dis_items, setdisplay) {
  setdisplay({
    ...dis_items,
    display: "none",
  });
}