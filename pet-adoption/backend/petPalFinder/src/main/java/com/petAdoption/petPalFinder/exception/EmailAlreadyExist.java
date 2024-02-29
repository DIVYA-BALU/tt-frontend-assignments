package com.petAdoption.petPalFinder.exception;

public class EmailAlreadyExist extends RuntimeException {
    public EmailAlreadyExist(String message){
        super(message);
    }
}
