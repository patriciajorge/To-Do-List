import mongoose from "mongoose"

// Tabela/Collection
const taskSchema = new mongoose.Schema({ // objeto
    task: { 
        type: String,
        require: true
    },
    check: { // tarefa concluida
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now()
    }
}) 

export default mongoose.model('Task', taskSchema)