function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function hello() {
  await wait(2000);
  console.log("hello");
  await wait(1000);
  console.log("goodbye");
}

hello();