package com.example.demo.implementation;

import com.example.demo.entity.Patients;
import com.example.demo.repo.PatientRepo;
import com.example.demo.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.boot.autoconfigure.container.ContainerImageMetadata.isPresent;


@Service
public class PatientImp implements PatientService {

    PatientRepo patientRepo;

    public PatientImp(@Autowired PatientRepo patientRepo) {
        this.patientRepo = patientRepo;
    }


    @Override
    public Patients SavePatients(Patients patients) {
        return patientRepo.save( patients);
    }

    @Override
    public List<Patients> getPatients() {
        return patientRepo.findAll();
    }

    @Override
    public Patients getPatientById(Long id) {
        return patientRepo.findById(id).isPresent()?patientRepo.findById(id).get():null;
    }

    @Override
    public Patients updatePatient(Patients patients) {
        return patientRepo.save(patients);
    }

    @Override
    public void deletePatientById(Long id) {
        patientRepo.deleteById(id);
    }


}


