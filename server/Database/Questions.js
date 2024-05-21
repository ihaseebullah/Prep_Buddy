const questions = `[
  {
    "question": "A body is moving in a circle under centripetal force “Fc”. If its linear velocity and radius both are made twice, the centripetal force will be:",
    "options": ["A. Fc", "B. 2Fc", "C. Fd/2", "D. 4Fc"],
    "correct": "D",
    "explanation": "B"
},
{
    "question": "The angle between velocity and acceleration in uniform circular motion is",
    "options": ["A. 180°", "B. 0°", "C. 90°", "D. 45°"],
    "correct": "C",
    "explanation": "C"
},
{
    "question": "A body of mass 2kg is moving in a circle of radius 3m with velocity 6 ms-1 acceleration is:",
    "options": ["A. 24 ms-2", "B. 36 ms-2", "C. 12 ms-2", "D. 18 ms-2"],
    "correct": "C",
    "explanation": "ac = v^2/r = 6^2/3 = 36/3 = 12 m/s^2"
},
{
    "question": "The time rate of change of angular displacement is called:",
    "options": ["A. Linear velocity", "B. Angular velocity", "C. Linear speed", "D. Angular speed"],
    "correct": "B",
    "explanation": "The time rate of change of angular displacement is called angular velocity. It is given by ω = Δθ/Δt"
},
{
    "question": "An electric motor of 12 horse power generates an angular velocity of 22rad/s. What will be the frequency of rotation?",
    "options": ["A. 20/π", "B. 7/2", "C. 10/π", "D. 7/44"],
    "correct": "B",
    "explanation": "B"
},
{
    "question": "Centripetal force performs",
    "options": ["A. Maximum work", "B. Minimum work", "C. Negative work", "D. No work"],
    "correct": "D",
    "explanation": "The centripetal force does not do any work because this force is always acting at right angle to the motion of the body or to the velocity of the body along the tangent. Therefore, when the work is done at constant rate this Work done by centripetal force is zero"
},
{
    "question": "A body moving along the circumference of a circle completes two revolutions. If the radius of the circular path is “R”, the ratio of displacement to the covered path will be",
    "options": ["A. πR", "B. 2πR", "C. Zero", "D. 4πR"],
    "correct": "C",
    "explanation": "C"
},
{
    "question": "The angular speed for daily rotation of earth in rad s-1 is",
    "options": ["A. 2π", "B. π", "C. 4π", "D. 7.3×10-5 rad-1"],
    "correct": "D",
    "explanation": "D"
},
{
    "question": "One radian is equal to",
    "options": ["A. 67.3°", "B. 57.3°", "C. 87.3°", "D. 60°"],
    "correct": "B",
    "explanation": "B"
},
{
    "question": "The useful unit of angular displacement in SI unit is",
    "options": ["A. Meter", "B. Degree", "C. Revolution", "D. Radian"],
    "correct": "D",
    "explanation": "D"
},
{
    "question": "Geo-stationary satellite completes one rotation around earth in",
    "options": ["A. 3 hours", "B. 6 hours", "C. 12 hours", "D. 24 hours"],
    "correct": "D",
    "explanation": "Geo-stationary satellite completes one rotation around earth in 24 hours."
},
{
    "question": "Radius of geo-stationary orbit from center of earth is nearly",
    "options": ["A. 42000 km", "B. 36000 km", "C. 24000 km", "D. 18000 km"],
    "correct": "A",
    "explanation": "A geostationary equatorial orbit (GEO) is a circular geosynchronous orbit in the plane of the Earth’s equator with a radius of approximately 42,164 km (26,199 mi) (measured from the center of the Earth)."
},
{
    "question": "Who discovered the inverse square law for gravity?",
    "options": ["A. Einstein", "B. Galileo", "C. Newton", "D. Plank"],
    "correct": "C",
    "explanation": "The inverse square law proposed by Newton suggests that the force of gravity acting between any two objects is inversely proportional to the square of the separation distance between the object’s centers."
},
{
    "question": "How many days would be in a year if the distance between the earth and the sun were reduced to half of its present value (assuming circular orbit)?",
    "options": ["A. 365 days", "B. 730 days", "C. 329 days", "D. 129 days"],
    "correct": "D",
    "explanation": "According to Kepler’s law T² ∝ r³ (T₁/T₂)² = (r₁/r₂)³ (365/T₂)² = (2r₁/r₁)³ (365/T₂)² = 8 (365/T₂) = 2√2 T₂ = 365 / (2√2) T₂ = 129 days There will be 129 days in a year."
},
{
    "question": "Angular momentum is conserved under",
    "options": ["A. Constant Force", "B. Central Force", "C. Variable Force", "D. Uniform Force"],
    "correct": "B",
    "explanation": "Central forces are directed towards the center, hence angular momentum is conserved under these forces."
},
{
    "question": "° = _______ radian.",
    "options": ["A. 0.01745", "B. 0.1745", "C. 57", "D. 0.2"],
    "correct": "A",
    "explanation": "Self Explanatory"
}
]

  `

module.exports = { questions }