// const {
//     GraphQLString,
//      GraphQLList,
//       GraphQLObjectType,
//        GraphQLNonNull,
//         GraphQLSchema} = require('graphql')
// const user = require('../users');

// const usersType = new GraphQLObjectType({
//     name: "user",
//     fields: () => ({
//         id: {
//             type: new GraphQLNonNull(GraphQLString)
//         },
//         name: {
//             type: new GraphQLNonNull(GraphQLString)
//         },
//         age: {
//             type: new GraphQLNonNull(GraphQLString)
//         },
//     })
// });

// const usersQuery = new GraphQLObjectType({
//     name: "usersSchema",
//     fields: () => ({
//         user: {
//             type: new GraphQLList(usersType),
//             args: {
//                 id: {type: GraphQLString}
//             },
//             resolve:  (root, args) => {
//                 if (args.id) return user.find(u => u.id === args.id)
//                 return user
//             }
//         }
//     })
// })

// const usersMutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: () => ({
//         editUser: {
//             type: new GraphQLList(usersType),
//             args: {
//                 id: {
//                     type: GraphQLString
//                 },
//                 name: {
//                     type: GraphQLString
//                 },
//                 age: {
//                     type: GraphQLString
//                 }
//             },
//             resolve: function (root, args) {
//                 if (args.id) {
//                     let edited = user.find(a => a.id === args.id);
//                     edited.model = args.name;
//                     return [edited]
//                 }

//             }
//         }
//     })
// })

// const Schema = new GraphQLSchema({
//     query: usersQuery,
//     mutation: usersMutation
// })


// module.exports = Schema;