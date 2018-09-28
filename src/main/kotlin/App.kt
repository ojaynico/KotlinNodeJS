external fun require(module: String): dynamic

fun main(args: Array<String>){

    val express = require("express")
    val bodyParser = require("body-parser")
    val app = express()

    app.set("view engine", "ejs")
    app.set("views", "node")
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended -> true }))


    app.get("/outbox") { req, res ->
     res.send(generateUser())
    }

    app.get("/") {req, res ->
        res.render("html/index")
    }

    app.post("/add") { req, res ->
        val name = req.body.nm
        val role = req.body.rl
        res.render("html/outbox", Outbox(name, role))
    }

    app.listen(3770) {
        println("Server has started successfully.....")
    }
}

data class Outbox(var name: String, var role: String)

fun generateUser(): Array<Outbox>{
    return arrayOf(
            Outbox("Andrew", "Developer"),
            Outbox("Innocent", "CEO"),
            Outbox("Brian", "Founder"),
            Outbox("David", "Accountant")
    )
}