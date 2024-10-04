package com.waa.miu.waa.complexMapping;


import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {

    private String paydate;

    private double amount;

}
