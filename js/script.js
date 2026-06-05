function submitForm() {
  const inputs = document.querySelectorAll("input, select, textarea");
  let valid = true;
  inputs.forEach((i) => {
    if (!i.value.trim()) {
      i.style.borderColor = "#e05";
      valid = false;
    } else {
      i.style.borderColor = "";
    }
  });
  if (!valid) return;
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
  inputs.forEach((i) => (i.value = ""));
}
