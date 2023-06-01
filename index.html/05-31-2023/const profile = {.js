const profile = {
  name: "ChatGPT",
  age: 2,
  occupation: "AI Language Model",
  location: "Internet",
  hobbies: ["Conversing", "Learning", "Assisting"],
  image: {
    src: "assets/profile_image.jpg",
    width: 250,
    height: 250,
    shape: "circle"
  }
};

// Accessing and displaying the last hobby
console.log("Last Hobby:", profile.hobbies[profile.hobbies.length - 1]);

// Accessing and displaying the image details
console.log("Image Source:", profile.image.src);
console.log("Image Width:", profile.image.width);
console.log("Image Height:", profile.image.height);
console.log("Image Shape:", profile.image.shape);
