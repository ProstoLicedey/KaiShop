const uuid = require('uuid') // пакт для генерации id для картинок
const  path = require('path') // сохрание пути для картинки
const  {Device, DeviceInfo} = require('../models/models') //модель
const  ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try{

            let {name, price,typeId, brandId,  info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, typeId, brandId,  img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }



            return res.json(device)
    }
    catch (e){
        next(ApiError.badRequest(e.message))
    }
    }
    async getAll(req, res){
            let {brandId, typeId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
        let offset = page * limit - limit
            let devices;
            if (!brandId && !typeId){
                devices = await Device.findAndCountAll({limit, offset})
            }
            else if (brandId && !typeId){
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
            }
            else if (!brandId && typeId){
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
            }
            else if (brandId && typeId){
                devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
            }
            return res.json(devices)
    }
    async getOne(req, res){
        const {id} = req.params
        const  device  = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            })

        return res.json(device)

    }
}

module.exports = new DeviceController()