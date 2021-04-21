const toys = [
    {
        id: 1,
        name: "toy car",
        maker: "hasbro",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "doll",
        maker: "hasbro",
        price: 600,
        weight: 1.4
    }
]

const knife = {
    name: "knife",
    maker: "kit",
    price: 1200,
    weight: 5
}

const addToyToInv = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewPhone = maxId + 1

    toyObject.id = maxId + 1
    toys.push(toyObject)
}



addToyToInv(knife)

for (const toy of toys){
        toy.price += toy.price * .05
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)

}

