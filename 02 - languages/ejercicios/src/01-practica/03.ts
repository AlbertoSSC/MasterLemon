console.log("******************************** 103 check-arguments");


  function f2(input){
    const result = input === undefined ? "unknown" : input || "";
    console.log (result);
  }

  f2 (undefined);