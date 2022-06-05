// Two fighters, one winner - imperfect solution but worked
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker == fighter1.name) {
      fighter2.health = fighter2.health - fighter1.damagePerAttack
      while (fighter1.health > 0 && fighter2.health > 0) {
        fighter1.health = fighter1.health - fighter2.damagePerAttack
        fighter2.health = fighter2.health - fighter1.damagePerAttack
        console.log(fighter1.health, fighter1.name)
        console.log(fighter2.health, fighter2.name)
      }
    }
    else if (firstAttacker == fighter2.name) {
      fighter1.health = fighter1.health - fighter2.damagePerAttack
      while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health = fighter2.health - fighter1.damagePerAttack
        fighter1.health = fighter1.health - fighter2.damagePerAttack
        console.log(fighter1.health, fighter1.name)
        console.log(fighter2.health, fighter2.name)
      }
    }
  if (fighter1.health > 0) {
    return fighter1.name
  } else {
    return fighter2.name
  }
}

