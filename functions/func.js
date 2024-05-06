import path from 'node:path'
import fs from 'node:fs'


export const readFile = (file) => {
    const dir = path.join(process.cwd(), "database", file)
    return JSON.parse(fs.readFileSync(dir, 'utf-8',))
}

export const writeFile = (file, data) => {
    const dir = path.join(process.cwd(), "database", file)
    fs.writeFileSync(dir, JSON.stringify(data))
    return 1
}