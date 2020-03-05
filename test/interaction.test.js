QUnit.module('MAIN MODULE', {})

QUnit.test('TEST calcVolume', assert => {
  assert.equal(calcVolume(1), 4.1887902047863905, 'Test radius = 1')
  assert.equal(calcVolume(3), 113.09733552923254, 'Test radius = 3')
  assert.equal(calcVolume(5), 523.5987755982989, 'Test radius = 5')
  assert.equal(calcVolume(7), 1436.7550402417319, 'Test radius = 7')
  assert.equal(calcVolume(10), 4188.790204786391, 'Test radius = 10')
})