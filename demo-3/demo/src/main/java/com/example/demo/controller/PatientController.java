package com.example.demo.controller;


import com.example.demo.entity.Patients;
import com.example.demo.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    PatientService patientService;

    public PatientController(@Autowired PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping("/savePatient")
    public Patients savePatient(@RequestBody Patients patients){
        return patientService.SavePatients(patients);

    }

    @GetMapping("/getPatients")
    public List<Patients> getPatients(){
        return patientService.getPatients();
    }

    @GetMapping("/getPatientById/{id}")
    public Patients getPatientById(@PathVariable Long id){
        return patientService.getPatientById( id);
    }

    @PutMapping("/updatePatient")
    public Patients updatePatient( @RequestBody Patients patients){
        return patientService.updatePatient(patients);
    }

    @DeleteMapping("/deletePatientById/{id}")
    public String deletePatientById(@PathVariable Long id){
        patientService.deletePatientById(id);
        return " deleted successfully";

    }
}
