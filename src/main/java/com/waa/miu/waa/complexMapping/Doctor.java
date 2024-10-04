package com.waa.miu.waa.complexMapping;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Doctor {

    @Id
    private long id;

    @Column(name = "type")
    private String doctortype;

    private String firstName;

    private String lastName;

}
