import express from 'express';
import { addFood, listFood, editFood, updateStatus, removeFood, updatePromotion } from '../controllers/foodController.js';
import multer from 'multer';
const foodRouter = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads', // Diretório de destino para os arquivos
    filename: (req, file, cb) => {
        // Nome do arquivo inclui a data/hora atual e o nome original do arquivo (para não haverem repetições de nomes)
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage})

foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single('image'),addFood);
foodRouter.put("/edit/:id", upload.single('image'), editFood);
foodRouter.put("/updateStatus/:id", updateStatus);
foodRouter.put("/updatePromotion/:id", updatePromotion);
foodRouter.delete("/remove/:id",removeFood);
export default foodRouter;