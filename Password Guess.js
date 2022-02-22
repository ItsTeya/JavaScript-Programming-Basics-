function password(input) {
  let entry = input[0];
  if (entry === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } 
  
  else {
    console.log("Wrong password!");
  }

}

password(["s3cr3t!P@ssw0rd"])
