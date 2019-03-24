const BroadFirstSearch = function(node, determine) {
    const stack = [node]
    while (stack.length) {
        const currentNode = stack.pop()
        if(determine(currentNode) === true){
            break
        }else{
            if(currentNode.children && currentNode.children.length){
                stack.unshift(...currentNode.children)
            }
        }
    }
}

const DepthFirstSearch = function(node, determine) {
    const stack = [node]
    while (stack.length) {
        const currentNode = stack.pop()
        if(determine(currentNode) === true){
            break
        }else{
            if(currentNode.children && currentNode.children.length){
                stack.push(...currentNode.children)
            }
        }
    }
}

const search = function(node, id){
    return function(searchFn){
        let result = null
        let count = 0
        let road = ''
        searchFn(node, function(currentNode){
            count ++
            road += '→'+currentNode.id
            if(currentNode.id === id){
                result = currentNode
                return true
            }
        })
        console.log(searchFn.name, count, road.slice(1))
        return result
    }
}

const nodeTree = {
    id: 0,
    children: [{
        id: 1,
        children:[{
            id: 2,
            children:[{
                id: 3,
            }]
        }]
    },{
        id: 4,
        children:[{
            id: 5,
            children:[{
                id: 6,
            }]
        }]
    },{
        id: 7,
        children:[{
            id: 8,
            children:[{
                id: 9,
            }]
        }]
    },]
}

search(nodeTree, 9)(BroadFirstSearch)   //BroadFirstSearch 8 0→7→4→1→8→5→2→9
search(nodeTree, 9)(DepthFirstSearch)   //DepthFirstSearch 4 0→7→8→9