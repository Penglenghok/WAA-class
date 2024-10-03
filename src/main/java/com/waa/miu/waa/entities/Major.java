package com.waa.miu.waa.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Major {

    @Id
    private int id;


    private String name;

    @OneToOne(mappedBy = "major")
    private Student student;
}
