// Jermein's Validation App
// Full functions + Automation (ML-style simulation)

// --- Validation functions ---
function validateName(name) {
  return name.trim().length > 0;
}

function validateAge(age) {
  return age >= 21 && age < 120;
}

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// --- Function to validate a single user ---
function validateUser(user) {
  let results = {
    name: validateName(user.name),
    age: validateAge(user.age),
    email: validateEmail(user.email),
  };

  results.valid = results.name && results.age && results.email;
  return results;
}

// --- Automation: generate random users ---
function generateUsers(n) {
  const sampleNames = ["Jermein", "Maria", "Carlos", "Ana", "Luis"];
  const users = [];

  for (let i = 0; i < n; i++) {
    let name = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    let age = Math.floor(Math.random() * 100); // age between 0 and 99
    let email =
      Math.random() > 0.3
        ? `${name.toLowerCase()}@example.com`
        : `${name.toLowerCase()}example.com`; // 70% valid, 30% invalid

    users.push({ name, age, email });
  }
  return users;
}

// --- Main function (automated run) ---
function runSimulation(n) {
  const users = generateUsers(n);

  users.forEach((user, index) => {
    const result = validateUser(user);
    console.log(`\n🔹 User #${index + 1}:`, user);

    if (result.valid) {
      console.log(` Awesome register: ${user.name}`);
    } else {
      console.log("⚠ Error in registration");
      if (!result.name) console.log(" Invalid name");
      if (!result.age) console.log(" Invalid age");
      if (!result.email) console.log(" Invalid email");
    }
  });
}

// Run simulation with 5 automated users
runSimulation(5);
