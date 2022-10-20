import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000'
})

export class DoctorServices {
    async getAll() {
        const { data } = await service.get('/doctors')
        return data
    }
    async getById(id) {
        const { data } = await service.get(`/doctors/${id}`)
            //const doctor = data.find(d => d.id == id)
        return data
    }
    async validateDoctor(email, password) {
        const data = await this.getAll()
            // const doctor = data.find(d => d.email == email && d.password == password)

        let doctor
        data.map(d => {
            if (d.email == email && d.password == password)
                doctor = d
        })
        console.log('doc', doctor);
        return doctor

        // return doctor ? doctor.id : undefined
    }
    async registerDoctor(data) {
        const lista = await this.getAll()
        data.id = lista.length + 1
        await service.post('/doctors', data)
    }
}