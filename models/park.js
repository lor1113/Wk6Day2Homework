const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.guestsAttractedPerDay = 0;
    this.dinosaurs = []

    this.addDinosaur = function(dinosaur){
        this.dinosaurs.push(dinosaur)
    }
    this.removeDinosaur = function(dinosaur){
        const index = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(index, 1);
    }
    this.dinosaurMostVisited = function(){
        let max = 0
        for (let i = 0; i < this.dinosaurs.length; i++) {
            dinosaur = this.dinosaurs[i]
            if (dinosaur.guestsAttractedPerDay > max){
                max = dinosaur.guestsAttractedPerDay
            }
        }
        return max
    }
    this.dinosaurBySpecies = function(species){
        let output = []
        for (let i = 0; i < this.dinosaurs.length; i++) {
            dinosaur = this.dinosaurs[i]
            if (dinosaur.species == species){
                output.push(dinosaur)
            }
        }
        return output
    }
    this.visitorCount = function(){
        let output = 0
        for (let i = 0; i < this.dinosaurs.length; i++) {
            dinosaur = this.dinosaurs[i]
            output = output + dinosaur.guestsAttractedPerDay
        }
        return [output,output * 365]
    }
    this.revenue = function(visits){
        return visits * this.price
    }
    this.removeBySpecies = function(species){
        let removeList = []
        for (let i = 0; i < this.dinosaurs.length; i++) {
            dinosaur = this.dinosaurs[i]
            if (dinosaur.species == species){
                removeList.push(dinosaur)
            }
        }
        for (let i = 0; i < removeList.length; i++) {
            dinosaur = removeList[i]
            this.removeDinosaur(dinosaur)
        }
    }
  }
  
  module.exports = Park;
  