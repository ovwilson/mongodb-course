//mongorestore dump

// db.companies.aggregate( [
//     { $match: { "relationships.person": { $ne: null } } },
//     { $project: { relationships: 1, _id: 0 } },
//     { $unwind: "$relationships" },
//     { $group: {
//         _id: "$relationships.person",
//         count: { $sum: 1 }
//     } },
//     { $sort: { count: -1 } }
// ] )



// db.grades.aggregate( [    
//     { $match: { "scores.type": { $ne: "quiz" } } },   
//     { $project: { student_id: 1, class_id: 1, scores:1, _id:0 } },      
//     { $unwind: "$scores.score" },    
//     { $match: {"relationships.person.permalink":"roger-ehrenberg"}  },
//     { $group: { _id: "$name" } },
//     { $count: "num" }    
// ] ).pretty()