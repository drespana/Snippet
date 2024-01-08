import snippets from "./dataset";

const Resolvers = {
    Query: {
        getAllSnippets: () => snippets,
        
        getSnippet:(_: any, args: any) => {
            console.log(args);
            return snippets.find((snippet) => snippet.id === args.id);
        },
    },
    
    // Mutation

};

export default Resolvers;