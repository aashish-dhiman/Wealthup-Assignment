import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;
const MONGODB_URI =
    "mongodb+srv://aashishdhiman88:Aashishd-mongodb@cluster0.9hytptp.mongodb.net/wealthup";
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `Connected to MongoDB database ${mongoose.connection.host}`
        );
    } catch (error) {
        console.log(`Error in MongoDB connection- ${error}`);
    }
};
connectDB();

const CodeSchema = new mongoose.Schema({
    value: String,
    used: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.model("Code", CodeSchema);

app.get("/api/codes", async (req, res) => {
    try {
        const code = new Code({ value: generateCode() });
        await code.save();
        res.json({ code: code.value });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/api/codes/use", async (req, res) => {
    const { code } = req.body;
    try {
        const existingCode = await Code.findOne({ value: code });

        if (!existingCode) {
            return res.status(400).json({ error: "Enter a valid code" });
        }

        if (existingCode.used) {
            return res
                .status(400)
                .json({ error: "This code has already been used" });
        }

        const now = new Date();
        const codeExpiration = new Date(existingCode.createdAt);
        codeExpiration.setSeconds(codeExpiration.getSeconds() + 60);

        if (now > codeExpiration) {
            return res.status(400).json({ error: "The code has expired" });
        }

        existingCode.used = true;
        await existingCode.save();

        res.json({ message: "Code is correct" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

function generateCode() {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return result;
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
