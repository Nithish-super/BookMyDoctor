package com.example.demo.services;

import com.example.demo.entity.Patients;

import java.util.List;

public interface PatientService {



    Patients SavePatients(Patients patients);

    List<Patients> getPatients();



    Patients getPatientById(Long id);

    Patients updatePatient(Patients patients);

    void deletePatientById(Long id);
}
