package com.waa.miu.waa.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Reservation {

    @Id
    private int id;

    private int guestCount;
}
