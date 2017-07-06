function ClozeCard(text, cloze) {
  if (text.includes(cloze)) {
    if (this instanceof ClozeCard) {
      this.fullText = text,
      this.cloze = cloze,
      this.partial = text.replace(cloze, "...");
    } else {
      return new ClozeCard(text, cloze);
    }
  } else {
    console.log("ERROR: '" + cloze + "' does not appear in '" + text + "'.");
  } 
}  

module.exports = ClozeCard;