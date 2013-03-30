package com.blogspot.javapeanuts.tddninja;

public class ApplicationDescriptor {
	private final String applicationName;
	
	public ApplicationDescriptor(String applicationName) {
		this.applicationName = applicationName;
	}

	public String getApplicationName() {
		return applicationName;
	}
}
