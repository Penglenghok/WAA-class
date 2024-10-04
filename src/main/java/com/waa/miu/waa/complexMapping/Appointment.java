package com.waa.miu.waa.complexMapping;


import jakarta.persistence.*;

@Entity
public class Appointment {

    @Id
    private long id;

    private String appdate;

    @OneToOne()
    private Patient patient;

    @Embedded
    private Payment payment;

    @OneToOne()
    private Doctor doctor;

}
