const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try{
  await fs.writeFile(fileName,fileContent) ; 
  }
  catch(error){
    console.error("Error in writing file:",error);
    throw error;
  }
};
writeFile("myfile.txt","Newton School")
.then(()=>console.log("File created successfully"))
.catch(()=>console.error("Failed to create file."))

module.exports = { writeFile };
