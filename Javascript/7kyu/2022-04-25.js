//Money money money
function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired) {
      let taxVal = principal * interest * tax
      let interestVal = principal * interest
      principal += interestVal
      principal -= taxVal
      years++
    }
  return years
}
