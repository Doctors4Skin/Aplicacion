import axios from 'axios'
import PatientServices from '@/services/PatientService'

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

        let doctor = {}
        let founded = false
        data.map(d => {
            if (d.email == email && d.password == password) {
                doctor = d
                founded = true
            }

        })
        return doctor;
        // if (founded)
        //     return [doctor, 1]

        // founded = false
        // const patientServices = new PatientServices
        // let patient
        // const data_patient = await patientServices.getAll()
        // data_patient.map(p => {
        //     if (p.email == email && p.password == password) {
        //         patient = p
        //         founded = true
        //     }
        // })

        // if (founded)
        //     return [patient, 2]

        // return doctor ? doctor.id : undefined
    }
    async registerDoctor(data) {
        const lista = await this.getAll()
        data.id = lista.length + 1
        await service.post('/doctors', data)
    }
}