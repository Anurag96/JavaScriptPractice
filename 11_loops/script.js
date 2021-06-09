let myStuff = ["bottle","carKeys","energyDrink","airPods","backPack","towel"];

const nestedObjects = {
    item01: {
      name: "piggy",
      type: "toy",
      weight: 30,
    },
    item02: {
      name: "headlamp",
      type: "equipment",
      weight: 120,
    },
  };
  

const article = document.querySelector("article");
let myStuffList = document.createElement("ul");


for(i=0;i<myStuff.length;i++){

    let myStuffReady = document.createElement("li");
    myStuffReady.innerHTML=myStuff[i];
    myStuffList.append(myStuffReady)
}

myStuff.forEach((element)=>{
let myStuffReady=document.createElement("li")
myStuffReady.innerHTML=element
myStuffList.append(myStuffReady)
})



for (const singleObject in nestedObjects) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `Name: ${nestedObjects[singleObject].name} ,${nestedObjects[singleObject].type} ,${nestedObjects[singleObject].weight}`;
  myStuffList.append(listItem);
}

article.append(myStuffList)