function build(name, age, gender) {
    return {
        age,
        gender,
        greeting: () => {
            console.log('hello', name)
        },
        name
    }
}

module.exports = build;