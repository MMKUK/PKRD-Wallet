
function generateWallet() {
  const entropy = crypto.getRandomValues(new Uint8Array(32));
  const hex = [...entropy].map(b => b.toString(16).padStart(2, '0')).join('');
  const address = "0x" + hex.slice(0, 40);
  const privateKey = "0x" + hex;
  document.getElementById("walletOutput").textContent =
    "Address: " + address + "\nPrivate Key: " + privateKey;
}
