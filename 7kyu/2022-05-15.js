// Complementary DNA
function DNAStrand(dna){
    let shouldBe = []
    for (let i in dna) {
      switch (dna[i]) {
          case 'T':
            shouldBe.push('A')
            break;
          case 'A':
            shouldBe.push('T')
            break;
          case 'G':
            shouldBe.push('C')
            break;
          case 'C':
            shouldBe.push('G')
            break;
      }
    }
    return shouldBe.join('')
  }

//Cuboids, cubes, getters - CLASSES
class Cuboid {
    constructor(length, width, height) {
      this.length = length
      this.width = width
      this.height = height
    }
    get surfaceArea() {
      console.log(this.length, this.width, this.height)
      let area = 2*(this.length*this.width) + 2*(this.width*this.height) + 2*(this.length * this.height)
      return area
    }
    get volume() {
      console.log(this.length, this.width, this.height)
      return (this.length*this.height*this.width)
    }
  }
  class Cube extends Cuboid {
    constructor(length, surfaceArea) {
      super(length, surfaceArea)
      this.length = length
      this.width = length
      this.height = length
    }
  }
  