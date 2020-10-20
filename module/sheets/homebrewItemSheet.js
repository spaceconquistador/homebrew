export default class homebrewItemSheet extends ItemSheet {
    get template(){
        return `systems/homebrew/templates/sheets/${this.item.data.type}-sheet.html`;
    }

}