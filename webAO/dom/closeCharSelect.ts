/**
 * Closes the character select screen without picking a character,
 * returning to the in-game view.
 */
export function closeCharSelect() {
  document.getElementById("client_waiting")!.style.display = "none";
  document.getElementById("client_charselect")!.style.display = "none";
  const emo = document.getElementById("client_emo");
  if (emo) emo.style.display = "";
}
window.closeCharSelect = closeCharSelect;
