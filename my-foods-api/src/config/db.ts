import { AppDataSource } from '../data-source'

export const dbConnect = async function dbConnect () {
    AppDataSource.initialize().then(async () => {
        console.log(`successful to connect at DB ${AppDataSource.options.database}`)

        process.on('SIGINT', ()=> { // when connection to DB is closed
            AppDataSource.destroy().then(() => console.log('DB connection closed'))
        })

    }).catch(err => {
        console.log(`***** DB ERROR :  ${err}`)
    })
}