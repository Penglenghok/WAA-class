package com.waa.miu.waa.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {

    @Id
    private int id;

    private String name;

    @OneToMany
    private List<Reservation> reservations;
}
