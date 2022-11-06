import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:3000'
})

export class PatientServices {

    async getAll() {
        const { data } = await service.get('/patients')
        console.log('data services', data)
        return data
    }

    async getById(id) {
        const { data } = await service.get(`/patients/${id}`)
    }

    async validatePatient(email, password) {
        const data = await this.getAll();
        let patient
        data.map(p => {
            if (p.email == email && p.password == password)
                patient = p
        })
        return patient
    }

    async registerPatient(patient) {
        const list = await this.getAll()
        patient.id = list.length + 1
        await service.post('/patients', patient)
    }
}