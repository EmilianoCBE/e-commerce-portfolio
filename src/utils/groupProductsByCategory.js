export function groupProductsByCategory(products){
    const groups = {}

    for(const product of products){
        const category = product.category
        if(!groups[category]){
            groups[category] = []
        }
        groups[category].push(product)
    }
    return groups
}