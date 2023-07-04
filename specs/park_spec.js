const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park",1000)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('velociraptor', 'omnivore', 50);
    dinosaur3 = new Dinosaur('bronchosaurus', 'herbivore', 20);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 1000);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    assert.strictEqual(park.dinosaurs[0],dinosaur1);
  });

  it('should be able to remove a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaurMostVisited()
    assert.deepStrictEqual(actual, 100);
  });


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.dinosaurBySpecies("velociraptor")
    assert.deepStrictEqual(actual[0], dinosaur2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.visitorCount()
    assert.deepStrictEqual(actual[0], 170);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.visitorCount()
    assert.deepStrictEqual(actual[1], 62050);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const visitors = park.visitorCount()
    const yearlyVisitors = visitors[1]
    const revenue = park.revenue(yearlyVisitors)
    assert.deepStrictEqual(revenue, 62050000);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.removeBySpecies("velociraptor")
    park.removeBySpecies("Megalodon")
    const actual = park.dinosaurs.length
    assert.deepStrictEqual(actual, 2);
  });


});
