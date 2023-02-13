export const slugify = (...args) => {
    const value = args.join(' ')

    return value
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, '-') // separator
}

// export const slugify = text =>
//   text
//     .toString()
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '')
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w-]+/g, '')
//     .replace(/--+/g, '-')